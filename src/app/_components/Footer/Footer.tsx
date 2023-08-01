import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <hr />
      <div>
        <p>© {new Date().getFullYear()} Julianne Adams</p>
      </div>
      <div>
        <a
          href="https://github.com/LeftySolara"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div>
        <a
          href="https://linkedin.com/in/julianneadams"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/LeftySolara"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </>
  );
};

export default Footer;
