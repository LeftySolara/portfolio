import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  return (
    <div className="flex flex-row justify-evenly basis-40">
      <a
        href="https://github.com/LeftySolara"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://linkedin.com/in/julianneadams"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://twitter.com/LeftySolara"
        aria-label="Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex justify-center w-full">
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
