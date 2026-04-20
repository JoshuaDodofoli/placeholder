import Wrapper from "../components/Wrapper";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Tag from "../components/Tag";
import HoverAnimation from "./(components)/HoverAnimation";

export default function Home() {

  return (
    <>
      <Hero />

      <Projects />

      <section id="about" className="bg-black text-paper w-full py-4">
        <Wrapper>
          <Tag text="About placeholder" />
          <div className="flex justify-between items-center min-h-[50vh] xl:min-h-[90vh] py-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-112 w-full gap-22 md:gap-0 mt-12">
              <div className="flex flex-col w-full justify-between h-full gap-10 md:gap-4 order-1">
               <p className="text-3xl xl:text-5xl max-w-lg">The space between thought and completion.</p>
               <p className="text-sm font-mono uppercase max-w-md"> We use AI generated images (slop) to explore, test and iterate on ideas. To build without overthinking and evolve without permission. <br />Placeholder gives your unfinished work a home.</p>
              </div>
              <div className="w-full h-full lg:order-last">
                <HoverAnimation />
              </div>
            </div>
          </div>
          {/* 
          <div className="w-full aspect-square md:aspect-video bg-paper mt-8 mb-12">

          </div> */}
        </Wrapper>
      </section>

      <Services />

    </>
  );
}
