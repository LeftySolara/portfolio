import {
  IconDefinition,
  faCss3,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillCard = ({ name, icon }: { name: string; icon: IconDefinition }) => {
  return (
    <div className="flex flex-row justify-center bg-secondary text-orange-50 font-semibold border-none rounded-xl w-3/4 lg:w-5/6 px-10 py-3">
      <FontAwesomeIcon icon={icon} size="xl" />
      <p className="ml-3">{name}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-col justify-center mt-10 w-full">
      <h2 className="font-bold font-heading self-center text-green-600 text-3xl m-4">
        Skills
      </h2>
      <div className="grid grid-rows-3 grid-cols-2 gap-y-5 justify-items-center self-center w-full lg:w-1/2">
        <SkillCard name="HTML" icon={faHtml5} />
        <SkillCard name="CSS" icon={faCss3} />
        <SkillCard name="JavaScript" icon={faJsSquare} />
        <SkillCard name="Node" icon={faNodeJs} />
        <SkillCard name="React" icon={faReact} />
        <SkillCard name="Python" icon={faPython} />
      </div>
    </div>
  );
};

export default Skills;
