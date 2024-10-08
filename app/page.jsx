import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import TypingAnimate from "@/components/TypingAnimate";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              <TypingAnimate />
            </span>
            <h1 className="h1 mb-6">
              Hello I'm <br /><span className="text-accent">Basthian Arisna</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm interested about creating technologies that can solve a problem in a more simpler way yet still reliable.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <Link href="https://docs.google.com/document/d/1lNyyx7H3cLnmXRETWvOMNGt2WzhioZQRA4h2YZt9v_k/edit?usp=sharing">look at my cv</Link>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mt-4 mb-10 xl:mt-0 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* <Stats /> */}
    </section>
  )
}

export default Home