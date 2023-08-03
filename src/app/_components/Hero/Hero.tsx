import Image from "next/image";
import SocialLinks from "@/app/_components/SocialLinks/SocialLinks";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center w-full h-screen">
      <Image
        src="/images/hero_image.jpg"
        width={300}
        height={300}
        alt="Julianne's personal headshot"
        className="relative mx-auto rounded-full overflow-hidden w-[250px] h-[250px]"
      />
      <h1 className="mt-4 text-center font-bold text-3xl font-heading">
        Hi, I'm Julianne!
      </h1>
      <p className="m-4 text-center font-body leading-relaxed w-5/6 self-center text-lg">
        I'm a software developer based in Michigan. I specialize in building
        exceptional websites and applications.
      </p>
      <div className="w-32 self-center">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Hero;
