import Image from "next/image";
import Wrapper from "../components/Wrapper";

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

      <section className="w-full">
        <div className="w-full flex items-center justify-center">
          {/* card */}
          <div className="w-sm bg-red-300">
            <div className="aspect-square w-full relative bg-stone">
            </div>
            <div className="w-full">
              <div className="size-10 bg-stone"></div>
              <div className="">
                <span>Project name</span>
                <p>Project description</p>
              </div>
            </div>
          </div>

          
        </div>
      </section>
    </>
  );
}
