"use client";

import { motion } from "motion/react";
import { useState } from "react";

export const Blob = ({ className }: { className?: string }) => {
    const [pulseKey, setPulseKey] = useState(0);

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
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
                `
            }} />
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setPulseKey((p) => p + 1)}
                className={`relative cursor-pointer bg-paper rounded-full text-paper ${className}`}
            >
                {pulseKey > 0 && (
                    <>
                        <span key={`ring1-${pulseKey}`} className="blob-ring" />
                        <span key={`ring2-${pulseKey}`} className="blob-ring blob-ring-2" />
                    </>
                )}
            </motion.div>
        </>
    );
};

export default Blob;
