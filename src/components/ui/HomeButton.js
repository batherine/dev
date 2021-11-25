import { Logo } from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";

export const HomeButton = () => {
  return (
    <Link as={RouterLink} px={2} py={1} rounded={"md"} to="/">
      <FontAwesomeIcon icon={Logo} size="2x" />
    </Link>
  );
};
