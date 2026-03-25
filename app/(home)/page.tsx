import Wrapper from "../components/Wrapper";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Tag from "../components/Tag";

export default function Home() {

  return (
    <>
      <Hero />

      <Projects />
  
      <section className="bg-black text-paper w-full py-4">
        <Wrapper>
          <div className="flex flex-col justify-between min-h-[35vh] xl:min-h-[60vh]">
           <Tag text="About placeholder" />
            <div className="">
              <p className="text-3xl lg:text-4xl xl:text-5xl md:max-w-sm lg:max-w-2xl">Placeholder space between thought and completion.</p>
              {/* <p className="text-sm text-stone/55 font-mono uppercase lg:max-w-xl font-bold mt-4"> We use AI generated images (slop) to explore,test and iterate on ideas. To build without overthinking and evolve without permission. <br />Placeholder gives your unfinished work a home.</p> */}
            </div>
          </div>

          <div className="w-full aspect-square md:aspect-video bg-paper mt-8 mb-12">

          </div>
        </Wrapper>
      </section>

      <Services />

    </>
  );
}
