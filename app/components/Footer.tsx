import Link from "next/link"
import { links, socials } from "../utils/data"
import Wrapper from "./Wrapper"

const Footer = () => {
  return (
    <footer className="w-full mt-12">
      <hr className="text-dark-grey/30" />
      <Wrapper className="mt-8">
        <span className="text-3xl font-space lg:text-5xl tracking-tight font-bold flex items-center justify-start w-full">
          Placeholder
        </span>
      </Wrapper>

      <Wrapper className="my-4 md:my-16">
        <div className="flex flex-col md:flex-row justify-between w-full py-8 gap-8">
          <p className="max-w-xs lg:max-w-sm">Placeholder gives your unfinished work a home.</p>
          <ul>
            <span className="text-xs font-medium uppercase">Navigation</span>
            {links.map((link, idx) => {
              return (
                <li key={idx} className="list-none hover:underline underline-offset-2">
                  <Link href={link.path}>{link.name}</Link>
                </li>
              )
            })}
          </ul>
          <ul>
            <span className="text-xs font-medium uppercase">Socials</span>
            {socials.map((social, idx) => {
              return (
                <li key={idx} className="list-none  hover:underline underline-offset-2">
                  <Link href={social.path}>{social.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </Wrapper>

      {/* <div className="w-full min-h-[40vh] bg-stone flex items-center justify-center overflow-hidden">

      </div> */}
    </footer>
  )
}

export default Footer 