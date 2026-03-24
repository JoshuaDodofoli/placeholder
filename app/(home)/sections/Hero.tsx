import Wrapper from '@/app/components/Wrapper'
import BookCallButton from '../(components)/BookCallButton'

const Hero = () => {
  return (
    <section className="min-h-[50vh] xl:min-h-[80vh] flex flex-col justify-between w-full">
      <div className="mt-4 md:top-8">
        <Wrapper>
          <span className="text-3xl font-space lg:text-5xl tracking-tight font-bold flex items-center justify-start w-full">
            Placeholder
          </span>
        </Wrapper>
      </div>

      <Wrapper>
        <div className="flex items-end justify-between w-full pb-4">
          <h1 className="text-3xl md:text-4xl xl:text-5xl tracking-tight md:max-w-lg xl:max-w-2xl font-medium">Filling the gaps for ideas still in progress</h1>
          <div className="hidden md:flex">
            <BookCallButton />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Hero