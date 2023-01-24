import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faJava, faPython, faJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faC, faRobot, faLock, faGlobe, faEllipsis } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    title: "java",
    icon: <FontAwesomeIcon icon={faJava} size="4x" />,
  },
  {
    title: "python",
    icon: <FontAwesomeIcon icon={faPython} size="4x" />,
  },
  {
    title: "c",
    icon: <FontAwesomeIcon icon={faC} size="4x" />,
  },
  {
    title: "js",
    icon: <FontAwesomeIcon icon={faJs} size="4x" />,
  },
  {
    title: "db",
    icon: <FontAwesomeIcon icon={faDatabase} size="4x" />,
  },
  {
    title: "iot",
    icon: <FontAwesomeIcon icon={faRobot} size="4x" />,
  },
  {
    title: "android",
    icon: <FontAwesomeIcon icon={faAndroid} size="4x" />,
  },
  {
    title: "security",
    icon: <FontAwesomeIcon icon={faLock} size="4x" />,
  },
  {
    title: "network",
    icon: <FontAwesomeIcon icon={faGlobe} size="4x" />,
  },
  {
    title: "etc",
    icon: <FontAwesomeIcon icon={faEllipsis} size="4x" />,
  },
];

export default data;