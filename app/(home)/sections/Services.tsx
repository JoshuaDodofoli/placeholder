'use client'
import Wrapper from "@/app/components/Wrapper"
import { projects, services } from "@/app/utils/data"
import Image from "next/image"
import BookCallButton from "../(components)/BookCallButton";
import Tag from "@/app/components/Tag";
import { motion } from "motion/react";
import { useState } from "react";

const Services = () => {

    const projectImg = projects.map((project) => project.images[0]);

    const [isHovered, setIsHovered] = useState<number>(0);

    return (
        <section className="w-full py-4 ">
            <Wrapper>
                <div className="flex flex-col justify-between h-[30vh] md:h-[20vh] lg:h-[40vh] xl:h-[60vh]">
                    <Tag text="Services" />
                    <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr] items-center py-8 mt-4 lg:mt-16">
                        <ul className="flex flex-col">
                            {
                                services.map((service, idx) => {
                                    return (
                                        <motion.li
                                            key={idx}
                                            onMouseEnter={() => setIsHovered(idx)}
                                            className="group relative list-none md:py-1 lg:py-2 cursor-pointer w-fit px-2 -mx-2"
                                        >
                                            <span className="relative z-10 text-3xl md:text-4xl xl:text-5xl text-black group-hover:text-paper font-medium transition-colors duration-300">
                                                {service}
                                            </span>
                                            <div className="absolute inset-0 bg-black origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100 z-0 pointer-events-none"></div>
                                        </motion.li>
                                    )
                                })
                            }
                        </ul>
                        <div className="w-2xl aspect-video relative hidden xl:block bg-red-300">
                            <Image
                                src={projectImg[isHovered] ?? ""}
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="h-[10vh] md:h-[25vh]" />

                <div className="grid min-h-[50vh] xl:min-h-[70vh] grid-cols-1 md:grid-cols-[300px_1fr] xl:grid-cols-[450px_1fr] w-full gap-4">
                    <div className="bg-dark-grey/5 rounded-2xl p-4 flex flex-col justify-between aspect-square md:aspect-auto">
                        <div className="">
                            <div className="flex items-start justify-between">
                                <div className="size-12 bg-pink-400"></div>
                                <span className="bg-dark-grey/20 flex items-center justify-center text-xs rounded-sm px-1.5 uppercase font-medium py-px">Get in touch</span>
                            </div>
                            <div className="space-y-1 mt-4">
                                <h6 className="text-2xl font-medium">Looking for something else?</h6>
                                <p className="text-base">Interested in working together? <br />Let's talk about it.</p>
                            </div>
                        </div>
                        <div className="">
                            <BookCallButton />
                        </div>
                    </div>
                    <div className="bg-black rounded-2xl flex items-center justify-center aspect-square md:aspect-auto">
                        <motion.div
                            animate={{ rotate: 90 }}
                            transition={{ duration: 1.2, repeat: Infinity }}
                            className="size-18 bg-paper rounded-xl flex items-center justify-center">
                            <motion.div
                                animate={{ scaleY: [1, 0] }}
                                transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="bg-black size-12 origin-top"
                            />
                        </motion.div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Services