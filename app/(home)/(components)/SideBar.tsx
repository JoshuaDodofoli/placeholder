import { Project } from "@/app/utils/interface"

interface SideBarProps extends Partial<Project> {}

const SideBar = ({ name, desc, service, tag }: SideBarProps) => {
  return (
    <aside className='bg-stone h-dvh w-full'>SideBar</aside>
  )
}

export default SideBar