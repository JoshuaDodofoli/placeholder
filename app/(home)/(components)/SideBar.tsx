import { Project } from "@/app/utils/interface"

interface SideBarProps extends Partial<Project> {}

const SideBar = ({ name, desc, service, tag }: SideBarProps) => {
  return (
    <aside className=' h-[calc(100vh-115px)] w-full flex items-start'>
        <div className="w-full space-y-2">
            <h3 className="text-4xl font-medium">{name}</h3>
            <p className="text-sm">{desc}</p>
            <ul className="text-xs font-medium flex items-center gap-2 mt-4">
               <li className="bg-dark-grey/15 px-2 py-1 rounded-full">{tag}</li> 
               <li className="bg-dark-grey/15 px-2 py-1 rounded-full">{service}</li> 
            </ul>
        </div>
    </aside>
  )
}

export default SideBar