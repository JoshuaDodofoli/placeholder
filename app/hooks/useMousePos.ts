'use client'

import { motionValue } from "motion"
import { useEffect } from "react";

const useMousePos = () => {
    const x = motionValue(0);
    const y = motionValue(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [x, y])

    return { x, y };
}

export default useMousePos;
