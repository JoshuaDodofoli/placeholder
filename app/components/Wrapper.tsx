import classNames from "classnames";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={classNames("max-w-375 px-4 lg:px-7", className)}>{children}</div>
  )
}

export default Wrapper