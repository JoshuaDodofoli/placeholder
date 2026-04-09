'use client'
import { Buttonvariants } from "@/app/components/navbar/Anime";
import Wrapper from "@/app/components/Wrapper";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface SlugNavbarProps {
    cover: string;
    name: string;
    caption: string;
}

const SlugNavbar = ({ cover, name, caption }: SlugNavbarProps) => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-xs py-4">
            <Wrapper className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                    <div className="relative size-12">
                        <Image src={cover} alt={name} fill />
                    </div>
                    <div className="">
                        <h6 className="font-medium text-base">{name}</h6>
                        <p className="text-sm font-medium text-dark-grey/80">{caption}</p>
                    </div>'
                </div>
                <Link href={'/'}>
                    <motion.button
                    variants={Buttonvariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-paper size-9 shadow-2xs relative cursor-pointer rounded-full flex items-center justify-center">
                        <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                            <line x1="1" y1="1" x2="19" y2="19" strokeWidth="2" strokeLinecap="round" className="stroke-dark-grey" />
                            <line x1="19" y1="1" x2="1" y2="19" strokeWidth="2" strokeLinecap="round" className="stroke-dark-grey" />
                        </svg>
                    </motion.button>
                </Link>
            </Wrapper>
        </nav>
    )
}

export default SlugNavbar