
interface TagProps {
    text: string;
}

const Tag = ({ text }: TagProps) => {
    return (
        <div className="flex items-center gap-3">
            <span className="text-xl leading-none font-bold">•</span>
            <span className="font-medium text-xs md:text-sm uppercase">{text}</span>
        </div>
    )
}

export default Tag