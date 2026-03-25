import Image from "next/image";
import SideBar from "../(home)/(components)/SideBar";
import SlugNavbar from "../(home)/(components)/SlugNavbar";
import Wrapper from "../components/Wrapper";
import { projects } from "../utils/data";

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

const page = async ({ params }: PageProps) => {

  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  return (
    <>
      <SlugNavbar cover={project?.images[0] ?? ""} name={project?.name ?? ""} caption={project?.caption ?? ""} />
      <div className="mt-24">
        <Wrapper className="grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[450px_1fr] gap-8 items-start">
          <div className="sticky top-24 w-full hidden lg:block">
            <SideBar {...project} />
          </div>
          <div className="w-full space-y-2 md:space-y-4 block lg:hidden">
            <h3 className="text-4xl font-medium">{project?.name}</h3>
            <p className="text-sm max-w-sm">{project?.desc}</p>
            <ul className="text-xs font-medium flex items-center gap-2 mt-4">
              <li className="bg-dark-grey/15 px-2 py-1 rounded-full">{project?.tag}</li>
              <li className="bg-dark-grey/15 px-2 py-1 rounded-full">{project?.service}</li>
            </ul>
          </div>
          <div className="">
            {
              project?.images.map((image, idx) => {
                return (
                  <div key={idx} className="w-full aspect-square relative mb-4">
                    <Image src={image} alt={`${project.name} image ${idx + 1}`} fill className="object-cover" />
                  </div>
                )

              }
              )
            }
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default page