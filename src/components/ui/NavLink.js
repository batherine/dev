import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useColorModeValue, Link } from "@chakra-ui/react";

const ExtNavLink = ({ children, url, icon }) => (
    <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("yellow.400", "yellow.500"),
        }}
        href={url}
        isExternal
    >
        <FontAwesomeIcon icon={icon} size="lg" />
        {children}
    </Link>
);

export default ExtNavLink;