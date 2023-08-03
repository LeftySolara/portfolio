import SocialLinks from "@/app/_components/SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <div className="flex justify-center w-full mt-8">
      <div className="flex flex-col w-10/12">
        <hr className="m-auto w-full" />
        <div className="flex flex-row justify-between p-4">
          <div>
            <p>© {new Date().getFullYear()} Julianne Adams</p>
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
