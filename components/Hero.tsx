import Image from "next/image";
import { Button } from "@nextui-org/button";
const Hero = () => {
  return (
    <section className="">
      <div className="h-screen">
        <div className="absolute inset-0 flex z-50 flex-col items-center justify-center gap-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl text-center text-pink-600 mt-10 font-bold">
            Anime Central {""}
          </h1>
          <span className="text-xl md:text-5xl text-center text-white font-bold">
            Info on Top Shows and Films
          </span>
          <Button as="a" href="#anime" color="danger" variant="shadow">
            Explore Now
          </Button>
        </div>
        <div className="absolute z-40 pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_right,transparent_2%,black)]"></div>
        <div className="z-10">
          <Image
            width={1920}
            height={1080}
            alt="Hero"
            src={`https://sm.ign.com/t/ign_in/feature/t/the-top-25/the-top-25-greatest-anime-characters-of-all-time_3jn9.1280.jpg`}
            unoptimized
            className="opacity-20 h-screen object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
