import { stagger } from "motion";

export const NavVariants = {
  open: {
    transition: {
      delayChildren: stagger(0.05),
    },
  },
  close: {
    transition: {
      delayChildren: stagger(0.05, { from: "last" }),
    },
  },
};

export const NavItemVariants = {
  open: {
    y: 10,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "spring" as const,
      bounce: 0.35,
    },
  },
  close: {
    y: -10,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
