"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Blob from "./Blob";
import LineStrip from "./LineStrip";

const LINE_SIZE = 1;
const GAP_SIZE  = 16;
const BASE_H    = 8;   // 8px base height/width
const MAX_H     = 24;  // 24px max expansion
const RADIUS    = 70;  // How far the hover effect spreads from cursor

const HoverAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const rowRef       = useRef<HTMLDivElement>(null);
    const rowRef2      = useRef<HTMLDivElement>(null);

    const [counts, setCounts]     = useState({ h: 0, v: 0 });
    const [isMobile, setIsMobile] = useState(false);

    const animateLines = useCallback((mousePos: number, containerSize: number, el: HTMLDivElement | null, axis: "w" | "h") => {
        const spans = el?.querySelectorAll("span");
        if (!spans || spans.length === 0) return;

        spans.forEach((span, i) => {
            const linePos = (i / (spans.length - 1)) * containerSize;
            const dist    = Math.abs(mousePos - linePos);
            const factor  = Math.max(0, 1 - dist / RADIUS);
            const size    = BASE_H + (MAX_H - BASE_H) * factor;
            const opacity = factor > 0 ? 0.3 + 0.7 * factor : 0.4;

            const htmlEl = span as HTMLElement;
            if (axis === "h") {
                htmlEl.style.height = `${size}px`;
            } else {
                htmlEl.style.width = `${size}px`;
            }
            htmlEl.style.opacity = `${opacity}`;
        });
    }, []);

    const resetLines = useCallback((el: HTMLDivElement | null, axis: "w" | "h") => {
        el?.querySelectorAll("span").forEach((span) => {
            const htmlEl = span as HTMLElement;
            if (axis === "h") htmlEl.style.height = `${BASE_H}px`;
            else htmlEl.style.width               = `${BASE_H}px`;
            htmlEl.style.opacity = "1";
        });
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect || !containerRef.current) return;

        if (isMobile) {
            const mouseY = e.clientY - rect.top;
            const h = containerRef.current.offsetHeight;
            animateLines(mouseY, h, rowRef.current, "w");
            animateLines(mouseY, h, rowRef2.current, "w");
        } else {
            const mouseX = e.clientX - rect.left;
            const w = containerRef.current.offsetWidth;
            animateLines(mouseX, w, rowRef.current, "h");
            animateLines(mouseX, w, rowRef2.current, "h");
        }
    };

    const handleMouseLeave = () => {
        const axis = isMobile ? "w" : "h";
        resetLines(rowRef.current, axis);
        resetLines(rowRef2.current, axis);
    };

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 1023px)");
        const onMQ = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches);
        
        onMQ(mq); // Set initial
        mq.addEventListener("change", onMQ as EventListener);

        const calculateCounts = () => {
            if (!containerRef.current) return;
            const { offsetWidth, offsetHeight } = containerRef.current;
            
            setCounts({
                h: Math.floor((offsetWidth + GAP_SIZE) / (LINE_SIZE + GAP_SIZE)),
                v: Math.floor((offsetHeight + GAP_SIZE) / (LINE_SIZE + GAP_SIZE)),
            });
        };

        calculateCounts();
        
        const observer = new ResizeObserver(calculateCounts);
        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            observer.disconnect();
            mq.removeEventListener("change", onMQ as EventListener);
        };
    }, []);

    const currentCount = isMobile ? counts.v : counts.h;

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-full flex flex-col lg:flex-col items-center lg:justify-between max-lg:flex-row"
        >
            <LineStrip
                ref={rowRef}
                count={currentCount}
                isMobile={isMobile}
                className="
                    lg:w-full lg:flex-row lg:items-start
                    max-lg:h-full max-lg:flex-col max-lg:items-start max-lg:w-auto
                    flex gap-4
                "
            />

            <div className="flex ml-48 lg:ml-0 lg:flex-row max-lg:flex-col items-center justify-around lg:w-full max-lg:h-full gap-6 lg:gap-0">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Blob key={i} className="size-12 lg:size-15 bg-paper" />
                ))}
            </div>

            <LineStrip
                ref={rowRef2}
                count={currentCount}
                isMobile={isMobile}
                className="
                    lg:w-full lg:flex-row lg:items-end
                    max-lg:h-full max-lg:flex-col max-lg:items-end max-lg:w-auto
                    hidden lg:flex gap-4
                "
            />
        </div>
    );
};

export default HoverAnimation;
