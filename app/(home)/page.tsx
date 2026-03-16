import Image from "next/image";
import Wrapper from "../components/Wrapper";

export default function Home() {
  return (
    <>
      <section className="min-h-[80vh] flex flex-col justify-between w-full">
        <div className="mt-4">
          <Wrapper>
            <span className="text-4xl font-semibold flex items-center justify-start w-full">
              Placeholder
            </span>
          </Wrapper>
        </div>


        <Wrapper>
          <div className="flex items-end justify-between w-full gap-8">
            <h1 className="text-6xl font-semibold max-w-xl">Filling the gaps for ideas still in progress</h1>
            <div className="flex justify-end shrink-0">
              call to action
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="bg-red-400">
        work section
      </section>
    </>
  );
}
