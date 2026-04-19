import { forwardRef } from "react";

type LineStripProps = {
    count: number;
    isMobile: boolean;
    className?: string;
};

const LineStrip = forwardRef<HTMLDivElement, LineStripProps>(({ count, isMobile, className }, ref) => {
    const transitionStyle = { transition: "height 0.12s ease, width 0.12s ease, opacity 0.12s ease" };

    return (
        <div ref={ref} className={className}>
            {Array.from({ length: count }).map((_, i) => (
                <span
                    key={i}
                    style={transitionStyle}
                    className={isMobile ? "h-px w-2 bg-paper shrink-0" : "w-px h-2 bg-paper shrink-0"}
                />
            ))}
        </div>
    );
});

LineStrip.displayName = "LineStrip";

export default LineStrip;
