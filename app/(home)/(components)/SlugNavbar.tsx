import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";

interface SlugNavbarProps {
    cover: string;
    name: string;
    caption: string;
}

const SlugNavbar = ({ cover, name, caption }: SlugNavbarProps) => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-xs py-4">
            <Wrapper className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                    <div className="relative size-12">
                        <Image src={cover} alt={name} fill />
                    </div>
                    <div className="">
                        <h6 className="font-medium text-base">{name}</h6>
                        <p className="text-sm font-medium text-dark-grey/80">{caption}</p>
                    </div>
                </div>
                <div className="">Close</div>
            </Wrapper>
        </nav>
    )
}

export default SlugNavbar