export const slugContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.2
        }
    }
}

export const slugItem = {
    initial: {
        opacity: 0,
        y: 20
    },      
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            type: "spring" as const,
            bounce: 0.25,
        }
    }
}