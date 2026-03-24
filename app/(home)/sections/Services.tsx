import Wrapper from "@/app/components/Wrapper"
import { projects, services } from "@/app/utils/data"
import Image from "next/image"

const Services = () => {

    const projectImg = projects.map((project) => project.images[0]);

    return (
        <section className="w-full py-4">
            <Wrapper>
                <div className="flex flex-col justify-between h-[30vh] md:h-[60vh]">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl leading-none font-bold">•</span>
                        <span className="font-medium">Services</span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr] items-center py-8 ">
                        <ul className="flex flex-col">
                            {
                                services.map((service, idx) => {
                                    return (
                                        <li key={idx} className="list-none lg:py-3">
                                            <span className="text-3xl lg:text-5xl">{service}
                                            </span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="w-lg aspect-video hidden lg:block bg-red-300"></div>
                    </div>
                </div>

                <div className="h-[15vh]" />

                <div className="w-full mt-8">
                    <div className="flex items-center justify-between gap-32">
                        {
                            [...projectImg].map((_, idx) => {
                                return (
                                    <div key={idx} className="size-12 relative bg-stone mb-4">
                                        <Image
                                            src={projectImg[idx] ?? "./photography/img3.webp"}
                                            fill
                                            alt="project image"
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Services