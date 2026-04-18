"use client";

import { motion, motionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

const LINE_SIZE = 1;
const GAP_SIZE  = 16;
const BASE_H    = 8;   // h-2 = 8px
const MAX_H     = 24;  // 2x the base height
const RADIUS    = 100; // px — how far the effect spreads from the cursor

const localX = motionValue(0);
const localY = motionValue(0);

const HoverAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const rowRef       = useRef<HTMLDivElement>(null);
    const rowRef2      = useRef<HTMLDivElement>(null);
    const [lineCount, setLineCount] = useState(0);

    const animateLines = (mouseX: number, rowEl: HTMLDivElement | null) => {
        const spans = rowEl?.querySelectorAll("span");
        if (!spans || spans.length === 0) return;
        const containerW = containerRef.current?.offsetWidth ?? 0;

        spans.forEach((span, i) => {
            const lineX   = (i / (spans.length - 1)) * containerW;
            const dist    = Math.abs(mouseX - lineX);
            const factor  = Math.max(0, 1 - dist / RADIUS);
            const height  = BASE_H + (MAX_H - BASE_H) * factor;
            const opacity = factor > 0 ? 0.3 + 0.7 * factor : 0.4;
            (span as HTMLElement).style.height  = `${height}px`;
            (span as HTMLElement).style.opacity = `${opacity}`;
        });
    };

    const resetLines = (rowEl: HTMLDivElement | null) => {
        rowEl?.querySelectorAll("span").forEach(span => {
            (span as HTMLElement).style.height  = `${BASE_H}px`;
            (span as HTMLElement).style.opacity = "1";
        });
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const mouseX = e.clientX - rect.left;
        animateLines(mouseX, rowRef.current);
        animateLines(mouseX, rowRef2.current);
    };

    const handleMouseLeave = () => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        resetLines(rowRef.current);
        resetLines(rowRef2.current);
    };

    useEffect(() => {
        if (containerRef.current) {
            localX.set(containerRef.current.offsetWidth / 2);
            localY.set(containerRef.current.offsetHeight / 2);
        }

        const calculate = () => {
            if (!rowRef.current) return;
            const width = rowRef.current.offsetWidth;
            const count = Math.floor((width + GAP_SIZE) / (LINE_SIZE + GAP_SIZE));
            setLineCount(count);
        };
        calculate();
        const observer = new ResizeObserver(calculate);
        if (rowRef.current) observer.observe(rowRef.current);
        return () => observer.disconnect();
    }, []);

    const lineStyle = { transition: "height 0.12s ease, opacity 0.12s ease" };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-full flex items-center flex-col justify-between"
        >
            <div ref={rowRef} className="w-full flex items-start gap-4">
                {Array.from({ length: lineCount }).map((_, i) => (
                    <span key={i} style={lineStyle} className="w-px h-2 bg-paper shrink-0" />
                ))}
            </div>
            <div>
                Blobs
            </div>
            <div ref={rowRef2} className="w-full flex items-end gap-4">
                {Array.from({ length: lineCount }).map((_, i) => (
                    <span key={i} style={lineStyle} className="w-px h-2 bg-paper shrink-0" />
                ))}
            </div>
        </div>
    );
};

export default HoverAnimation;
