import Image from "next/image";
import Wrapper from "../components/Wrapper";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Services from "./sections/Services";

export default function Home() {

  return (
    <>
      <Hero />

      <Projects />

      <section className="bg-black text-paper w-full py-4">
        <Wrapper>
          <div className="flex flex-col justify-between h-[50vh] md:h-[60vh]">
            <div className="flex items-center gap-3">
              <span className="text-2xl leading-none font-bold">•</span>
              <span className="font-medium">About Placeholder</span>
            </div>
            <div className="">
              <p className="text-3xl lg:text-5xl lg:max-w-2xl">Placeholder space between thought and completion.</p>
              {/* <p className="text-sm text-stone/55 font-mono uppercase lg:max-w-xl font-bold mt-4"> We use AI generated images (slop) to explore,test and iterate on ideas. To build without overthinking and evolve without permission. <br />Placeholder gives your unfinished work a home.</p> */}
            </div>
          </div>

          <div className="w-full aspect-square lg:aspect-video bg-paper mt-8 mb-12">

          </div>
        </Wrapper>
      </section>

      <Services />

    </>
  );
}
