"use client";

import { useEffect, useRef, useState } from "react";

const LINE_SIZE = 1; 
const GAP_SIZE = 12;
const HoverAnimation = () => {
    const rowRef = useRef<HTMLDivElement>(null);
    const [dotCount, setDotCount] = useState(0);

    useEffect(() => {
        const calculate = () => {
            if (!rowRef.current) return;
            const width = rowRef.current.offsetWidth;
            const count = Math.floor((width + GAP_SIZE) / (LINE_SIZE + GAP_SIZE));
            setDotCount(count);
        };

        calculate();

        const observer = new ResizeObserver(calculate);
        if (rowRef.current) observer.observe(rowRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full h-full flex items-center flex-col justify-between">
            <div ref={rowRef} className="w-full flex gap-3">
                {Array.from({ length: dotCount }).map((_, i) => (
                    <span key={i} className="w-px h-2 bg-paper shrink-0" />
                ))}
            </div>
            <div className="">Blobs</div>
            <div ref={rowRef} className="w-full flex gap-3">
                {Array.from({ length: dotCount }).map((_, i) => (
                    <span key={i} className="w-px h-2 bg-paper shrink-0" />
                ))}
            </div>
        </div>
    );
};

export default HoverAnimation;
