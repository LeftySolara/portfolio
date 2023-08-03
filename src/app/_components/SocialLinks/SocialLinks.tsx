import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialLinks = () => {
  return (
    <div className="flex flex-row justify-evenly basis-24">
      <a
        href="mailto:julianne@julianneadams.info"
        aria-label="Email"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
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

export default SocialLinks;
