import { Project } from "@/app/utils/interface";
import Link from "next/link";

type CardProps = Partial<Project>;

const Card = ({ name, slug, caption, images }: CardProps) => {

  return (
    <Link href={`/${slug}`} scroll={false}>
      <div className="min-w-[80vw] sm:min-w-[50vw] lg:min-w-0 bg-white">
        <div className="aspect-square w-full relative bg-stone">
          {
            images && images.length > 0 && (
              <img src={images[0] ?? ""} alt={name ?? ""} className="w-full h-full object-cover" />
            )
          }
        </div>
        <div className="w-full flex items-center justify-start gap-4 p-4">
          <div className="size-12 bg-stone relative">
            {
              images && images.length > 0 && (
                <img src={images[1] ?? ""} alt={name ?? ""} className="w-full h-full object-cover" />
              )
            }
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{name}</span>
            <p className="text-sm text-dark-grey">{caption}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card