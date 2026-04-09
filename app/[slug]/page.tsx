import { AnimatePresence } from "motion/react";
import { projects } from "../utils/data";
import SlugClient from "./(components)/SlugClient";

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

const page = async ({ params }: PageProps) => {

  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <div className="font-sans text-3xl">Project not found</div>;
  }

  return (
      <SlugClient project={project} />
  )
}

export default page