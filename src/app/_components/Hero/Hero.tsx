import Image from "next/image";
import SocialLinks from "@/app/_components/SocialLinks/SocialLinks";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center align-middle w-5/12">
      <Image
        src="/images/hero_image.jpg"
        width={300}
        height={300}
        alt="Julianne's personal headshot"
        className="relative mx-auto rounded-full overflow-hidden w-36 h-36"
      />
      <h1 className="text-center font-bold text-xl">Hi, I'm Julianne!</h1>
      <p className="text-center">
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
