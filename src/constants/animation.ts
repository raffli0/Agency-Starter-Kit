export const ANIMATION = {
    fadeIn: {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
    },
    stagger: {
        container: { staggerChildren: 0.08 },
    },
    durations: {
        fast: 0.2,
        base: 0.4,
        slow: 0.6,
    },
} as const;
