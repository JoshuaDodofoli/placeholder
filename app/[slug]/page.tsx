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
    <div>
      <Wrapper>
        <h1>{project?.name}</h1>
        <p>{project?.desc}</p>
      </Wrapper>
    </div>
  )
}

export default page