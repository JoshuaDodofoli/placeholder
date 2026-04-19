"use client";

import { motion, motionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

const LINE_SIZE = 1;
const GAP_SIZE  = 16;
const BASE_H    = 8;   // h-2 = 8px
const MAX_H     = 24;  // 2x the base height
const RADIUS    = 70; // px — how far the effect spreads from the cursor

const localX = motionValue(0);
const localY = motionValue(0);

const HoverAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const rowRef       = useRef<HTMLDivElement>(null);
    const rowRef2      = useRef<HTMLDivElement>(null);
    const [lineCount, setLineCount]   = useState(0);
    const [lineCountV, setLineCountV] = useState(0); // vertical strip count for mobile
    const [isMobile, setIsMobile]     = useState(false);
    const [pulseKeys, setPulseKeys]   = useState<number[]>([0, 0, 0]);

    const handleBlobClick = (index: number) => {
        setPulseKeys(prev => prev.map((k, i) => i === index ? k + 1 : k));
    };

    // Animate horizontal lines by X proximity (desktop top/bottom strips)
    const animateLinesX = (mouseX: number, rowEl: HTMLDivElement | null) => {
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

    // Animate vertical lines by Y proximity (mobile left/right strips — lines grow in width)
    const animateLinesY = (mouseY: number, colEl: HTMLDivElement | null) => {
        const spans = colEl?.querySelectorAll("span");
        if (!spans || spans.length === 0) return;
        const containerH = containerRef.current?.offsetHeight ?? 0;
        spans.forEach((span, i) => {
            const lineY   = (i / (spans.length - 1)) * containerH;
            const dist    = Math.abs(mouseY - lineY);
            const factor  = Math.max(0, 1 - dist / RADIUS);
            const width   = BASE_H + (MAX_H - BASE_H) * factor;
            const opacity = factor > 0 ? 0.3 + 0.7 * factor : 0.4;
            (span as HTMLElement).style.width   = `${width}px`;
            (span as HTMLElement).style.opacity = `${opacity}`;
        });
    };

    const resetLines = (rowEl: HTMLDivElement | null, axis: "h" | "w" = "h") => {
        rowEl?.querySelectorAll("span").forEach(span => {
            if (axis === "h") {
                (span as HTMLElement).style.height  = `${BASE_H}px`;
            } else {
                (span as HTMLElement).style.width   = `${BASE_H}px`;
            }
            (span as HTMLElement).style.opacity = "1";
        });
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        if (isMobile) {
            const mouseY = e.clientY - rect.top;
            animateLinesY(mouseY, rowRef.current);
            animateLinesY(mouseY, rowRef2.current);
        } else {
            const mouseX = e.clientX - rect.left;
            animateLinesX(mouseX, rowRef.current);
            animateLinesX(mouseX, rowRef2.current);
        }
    };

    const handleMouseLeave = () => {
        resetLines(rowRef.current,  isMobile ? "w" : "h");
        resetLines(rowRef2.current, isMobile ? "w" : "h");
    };

    useEffect(() => {
        if (containerRef.current) {
            localX.set(containerRef.current.offsetWidth / 2);
            localY.set(containerRef.current.offsetHeight / 2);
        }

        // Detect mobile breakpoint (now applying up to medium screens)
        const mq = window.matchMedia("(max-width: 1023px)");
        const onMQ = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches);
        onMQ(mq);
        mq.addEventListener("change", onMQ as (e: MediaQueryListEvent) => void);

        // Horizontal line count (desktop top/bottom, also used as fallback height count)
        const calcH = () => {
            if (!rowRef.current) return;
            const size  = isMobile ? rowRef.current.offsetHeight : rowRef.current.offsetWidth;
            const count = Math.floor((size + GAP_SIZE) / (LINE_SIZE + GAP_SIZE));
            setLineCount(count);
        };
        calcH();
        const obsH = new ResizeObserver(calcH);
        if (rowRef.current) obsH.observe(rowRef.current);

        // Vertical line count (mobile left/right strips)
        const calcV = () => {
            if (!rowRef.current) return;
            const height = rowRef.current.offsetHeight;
            const count  = Math.floor((height + GAP_SIZE) / (LINE_SIZE + GAP_SIZE));
            setLineCountV(count);
        };
        calcV();
        const obsV = new ResizeObserver(calcV);
        if (containerRef.current) obsV.observe(containerRef.current);

        return () => {
            obsH.disconnect();
            obsV.disconnect();
            mq.removeEventListener("change", onMQ as (e: MediaQueryListEvent) => void);
        };
    }, []);

    useEffect(() => {
        const id = "blob-pulse-style";
        if (document.getElementById(id)) return;
        const style = document.createElement("style");
        style.id = id;
        style.textContent = `
            @keyframes blobRing {
                0%   { transform: scale(1);   opacity: 0.55; }
                100% { transform: scale(2); opacity: 0; }
            }
            .blob-ring {
                position: absolute;
                inset: 0;
                border-radius: 9999px;
                background: currentColor;
                animation: blobRing 0.85s cubic-bezier(0.2, 0.6, 0.4, 1) forwards;
                pointer-events: none;
            }
            .blob-ring-2 {
                animation-delay: 0.18s;
            }
        `;
        document.head.appendChild(style);
    }, []);

    const hLineStyle = { transition: "height 0.12s ease, opacity 0.12s ease" };
    const vLineStyle = { transition: "width 0.12s ease, opacity 0.12s ease" };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-full flex flex-col lg:flex-col items-center  lg:justify-between max-lg:flex-row"
        >
            <div
                ref={rowRef}
                className="
                    lg:w-full lg:flex-row lg:items-start
                    max-lg:h-full max-lg:flex-col max-lg:items-start max-lg:w-auto
                    flex gap-4
                "
            >
                {Array.from({ length: isMobile ? lineCountV : lineCount }).map((_, i) => (
                    <span
                        key={i}
                        style={isMobile ? vLineStyle : hLineStyle}
                        className={isMobile
                            ? "h-px w-2 bg-paper shrink-0"
                            : "w-px h-2 bg-paper shrink-0"
                        }
                    />
                ))}
            </div>

            <div className="flex ml-48 lg:ml-0 lg:flex-row max-lg:flex-col items-center justify-around lg:w-full max-lg:h-full gap-6 lg:gap-0">
                {Array.from({ length: 4 }).map((_, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleBlobClick(i)}
                        className="relative size-12 lg:size-20 cursor-pointer bg-paper rounded-full text-paper"
                    >
                        {pulseKeys[i] > 0 && (
                            <>
                                <span key={pulseKeys[i]}       className="blob-ring" />
                                <span key={pulseKeys[i] + 0.5} className="blob-ring blob-ring-2" />
                            </>
                        )}
                    </motion.div>
                ))}
            </div>

            <div
                ref={rowRef2}
                className="
                    lg:w-full lg:flex-row lg:items-end
                    max-lg:h-full max-lg:flex-col max-lg:items-end max-lg:w-auto
                    hidden lg:flex gap-4
                "
            >
                {Array.from({ length: isMobile ? lineCountV : lineCount }).map((_, i) => (
                    <span
                        key={i}
                        style={isMobile ? vLineStyle : hLineStyle}
                        className={isMobile
                            ? "h-px w-2 bg-paper shrink-0"
                            : "w-px h-2 bg-paper shrink-0"
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default HoverAnimation;
