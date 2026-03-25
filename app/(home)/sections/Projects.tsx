import React from 'react'
import Card from '../(components)/Card'
import { projects } from '@/app/utils/data'

const Projects = () => {
    return (
        <section className="w-full bg-black">
            <div className="w-full flex overflow-x-auto lg:grid lg:grid-cols-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {
                    projects.map((project) => {
                        return (
                            <Card key={project.slug} {...project} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects