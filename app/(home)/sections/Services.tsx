import Wrapper from "@/app/components/Wrapper"
import { projects, services } from "@/app/utils/data"
import Image from "next/image"
import BookCallButton from "../(components)/BookCallButton";
import Tag from "@/app/components/Tag";

const Services = () => {

    const projectImg = projects.map((project) => project.images[0]);

    return (
        <section className="w-full py-4">
            <Wrapper>
                <div className="flex flex-col justify-between h-[30vh] md:h-[20vh] lg:h-[40vh] xl:h-[60vh]">
                  <Tag text="Services" />
                    <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr] items-center py-8 ">
                        <ul className="flex flex-col">
                            {
                                services.map((service, idx) => {
                                    return (
                                        <li key={idx} className="list-none md:py-1 lg:py-2">
                                            <span className="text-3xl md:text-4xl xl:text-5xl">{service}
                                            </span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="w-lg aspect-video hidden xl:block bg-red-300"></div>
                    </div>
                </div>

                <div className="h-[10vh] md:h-[25vh]" />

                {/* <div className="w-full mt-8">
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
                </div> */}

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
                    <div className="bg-black rounded-2xl aspect-square md:aspect-auto"></div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Services