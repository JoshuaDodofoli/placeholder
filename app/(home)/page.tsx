import Image from "next/image";
import Wrapper from "../components/Wrapper";
import { projects, services } from "../utils/data";
import Card from "./(components)/Card";

export default function Home() {

  return (
    <>
      <section className="min-h-[55vh] xl:min-h-[80vh] flex flex-col justify-between w-full bg-brand">
        <div className="mt-4 md:top-8">
          <Wrapper>
            <span className="text-3xl font-space lg:text-5xl tracking-tight font-bold flex items-center justify-start w-full">
              Placeholder
            </span>
          </Wrapper>
        </div>

        <Wrapper>
          <div className="flex items-end justify-between w-full pb-4">
            <h1 className="text-3xl lg:text-5xl tracking-tight md:text-6xl lg:max-w-2xl font-medium">Filling the gaps for ideas still in progress</h1>
            <div className="hidden lg:flex">
              <div className="flex items-center justify-between gap-3 bg-white p-2">
                <div className="flex items-center mr-8 gap-3">
                  <div className="size-17 bg-pink-400"></div>
                  <div className="flex flex-col">
                    <span className="text-sm text-dark-grey">Project discovery</span>
                    <p className="text-sm font-medium">Book a call</p>
                  </div>
                </div>
                <div className="size-10 bg-paper flex items-center justify-center rounded-full">
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                    <line x1="0" y1="6" x2="18" y2="6" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    <line x1="12" y1="1" x2="19" y2="6" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    <line x1="12" y1="11" x2="19" y2="6" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="w-full bg-black">
        <div className="w-full flex overflow-x-auto lg:grid lg:grid-cols-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {
            projects.map((project, idx) => {
              return (
                <Card key={idx} {...project} />
              )
            })
          }
        </div>
      </section>

      <section className="bg-black text-paper w-full py-4">
        <Wrapper>
          <div className="flex flex-col justify-between h-[50vh] md:h-[60vh]">
            <div className="flex items-center gap-3">
              <span className="text-2xl leading-none font-bold">•</span>
              <span className="font-medium">About Placeholder</span>
            </div>
            <div className="">
              <p className="text-3xl lg:text-5xl lg:max-w-2xl">Placeholder space between thought and completion.</p>
              <p className="text-sm text-stone/55 font-mono uppercase lg:max-w-xl font-bold mt-4"> We use AI generated images (slop) to explore,test and iterate on ideas. To build without overthinking and evolve without permission. <br />Placeholder gives your unfinished work a home.</p>
            </div>
          </div>

          <div className="w-full aspect-square lg:aspect-video bg-paper mt-8 mb-12">

          </div>
        </Wrapper>
      </section>

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
              <div className="w-xs aspect-square hidden lg:block bg-red-300"></div>
            </div>
          </div>

          <div className="h-[15vh]" />

          <div className="w-full mt-8">
            <div className="flex items-center justify-center gap-32">
              {
                [...Array(8)].map((_, idx) => {
                  return (
                    <div key={idx} className="size-12 bg-stone mb-4">
                    </div>
                  )
                })
              }
            </div>
          </div>
        </Wrapper>
      </section>

    </>
  );
}
