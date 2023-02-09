import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faJava, faPython, faJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faC, faRobot, faLock, faGlobe, faEllipsis } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    title: "java",
    icon: <FontAwesomeIcon icon={faJava} size="3x" />,
  },
  {
    title: "python",
    icon: <FontAwesomeIcon icon={faPython} size="3x" />,
  },
  {
    title: "c",
    icon: <FontAwesomeIcon icon={faC} size="3x" />,
  },
  {
    title: "js",
    icon: <FontAwesomeIcon icon={faJs} size="3x" />,
  },
  {
    title: "db",
    icon: <FontAwesomeIcon icon={faDatabase} size="3x" />,
  },
  {
    title: "iot",
    icon: <FontAwesomeIcon icon={faRobot} size="3x" />,
  },
  {
    title: "android",
    icon: <FontAwesomeIcon icon={faAndroid} size="3x" />,
  },
  {
    title: "security",
    icon: <FontAwesomeIcon icon={faLock} size="3x" />,
  },
  {
    title: "network",
    icon: <FontAwesomeIcon icon={faGlobe} size="3x" />,
  },
  {
    title: "etc",
    icon: <FontAwesomeIcon icon={faEllipsis} size="3x" />,
  },
];

export default data;