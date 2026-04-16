'use client'
import SideBar from '@/app/(home)/(components)/SideBar'
import SlugNavbar from '@/app/(home)/(components)/SlugNavbar'
import Wrapper from '@/app/components/Wrapper'
import { Project } from '@/app/utils/interface'
import Image from 'next/image'
import { motion } from 'motion/react'
import { slugContainer, slugItem } from './Anime'

const SlugClient = ({ project }: { project: Project }) => {
    return (
        <motion.div id="slug-page" variants={slugContainer} initial="initial" animate="animate">
            <SlugNavbar cover={project?.images[0] ?? ""} name={project?.name ?? ""} caption={project?.caption ?? ""} />
            <div className="pt-24">
                <Wrapper className="grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[450px_1fr] gap-8 items-start">
                    <motion.div className="sticky top-24 w-full hidden lg:block" variants={slugItem}>
                        <SideBar {...project} />
                    </motion.div>
                    <motion.div variants={slugItem} className="w-full space-y-4 block lg:hidden">
                        <h3 className="text-4xl font-medium">{project?.name}</h3>
                        <p className="text-sm max-w-sm">{project?.desc}</p>
                        <ul className="text-xs font-medium flex items-center gap-2 mt-4">
                            <li className="bg-dark-grey/15 px-2 py-1 rounded-full">{project?.tag}</li>
                            <li className="bg-dark-grey/15 px-2 py-1 rounded-full">{project?.service}</li>
                        </ul>
                    </motion.div>
                    <div className="">
                        {
                            project?.images.map((image, idx) => {
                                return (
                                    <motion.div variants={slugItem} key={idx} className="w-full aspect-square relative mb-4">
                                        <Image src={image} alt={`${project.name} image ${idx + 1}`} fill className="object-cover" />
                                    </motion.div>
                                )

                            }
                            )
                        }
                    </div>
                </Wrapper>
            </div>
        </motion.div>
    )
}

export default SlugClient