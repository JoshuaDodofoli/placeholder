'use client'
import { links } from "@/app/utils/data"
import Link from "next/link"
import { useState } from "react"
import Wrapper from "../Wrapper"
import { AnimatePresence, motion } from "motion/react"
import { Buttonvariants, NavItemVariants, NavVariants } from "./Anime"

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenu(prev => !prev);
    }

    return (
        <nav className="fixed right-0 top-4 md:top-8">
            <Wrapper>
                <motion.button
                    variants={Buttonvariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={handleToggleMenu} className="bg-white size-11 shadow-2xs relative cursor-pointer rounded-full flex flex-col items-center justify-center">
                    <svg width="20" height="11" viewBox="0 0 20 12" fill="none">
                        <line x1="0" y1="1" x2="20" y2="1" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        <line x1="0" y1="8" x2="20" y2="8" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </motion.button>

                <AnimatePresence>
                    {toggleMenu && (
                        <motion.ul
                            variants={NavVariants}
                            initial="close"
                            animate="open"
                            exit="close"
                            className="flex flex-col items-end absolute right-4 top-14 gap-2 z-60">
                            {
                                links.map((link, idx) => {
                                    return (
                                        <motion.li
                                            variants={NavItemVariants}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            key={idx}
                                            className="bg-black text-base text-white px-3 py-1.5 rounded-full"
                                        >
                                            <Link href={link.path}>{link.name}</Link>
                                        </motion.li>
                                    )
                                })
                            }
                        </motion.ul>
                    )}
                </AnimatePresence>
            </Wrapper>
        </nav>
    )
}

export default Navbar