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
        <Wrapper className="grid md:grid-cols-[300px_1fr]">
          <div className="sticky top-24 w-full">
            <SideBar {...project} />
          </div>
          <div className="">
            <h1>{project?.name}</h1>
            <p>{project?.desc}</p>
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default page