import Image from "next/image";
import SocialLinks from "@/app/_components/SocialLinks/SocialLinks";

const Hero = () => {
  return (
    <div className="flex flex-col justify-around w-full h-80">
      <Image
        src="/images/hero_image.jpg"
        width={300}
        height={300}
        alt="Julianne's personal headshot"
        className="relative mx-auto rounded-full overflow-hidden w-[150px] h-[150px]"
      />
      <h1 className="text-center font-bold text-xl">Hi, I'm Julianne!</h1>
      <p className="text-justify leading-relaxed w-5/6 self-center">
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
