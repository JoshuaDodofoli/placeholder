'use client'
import { AnimatePresence, motion } from "motion/react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import { usePathname } from "next/navigation";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathName}>
        <Navbar />
        {children}
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
