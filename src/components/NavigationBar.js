import {
  Box,
  Flex,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const InternalLinks = [
  {
    label: "Projects",
    url: "/projects",
  },
  {
    label: "Hippo's Book Club",
    url: "/bookclub",
  },
  {
    label: "Gallery",
    url: "/galleriaDeBlur",
  },
];

const ExternalLinks = [
  {
    label: "GitHub",
    url: "https://github.com/batherine",
    icon: faGithub,
  },
];

const NavLink = ({ children, url }) => (
  <Link
    as={RouterLink}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("yellow.400", "yellow.500"),
    }}
    to={url}
  >
    {children}
  </Link>
);

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

const NavigationBar = (props) => {
  const { toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {InternalLinks.map((link, i) => (
              <NavLink key={i} url={link.url}>
                {link.label}
              </NavLink>
            ))}
            {ExternalLinks.map((link, i) => (
              <ExtNavLink key={i} url={link.url} icon={link.icon}>
                {link.label}
              </ExtNavLink>
            ))}
          </HStack>
        </HStack>

        <Stack direction={"row"} spacing={8} alignItems="center">
          <Button onClick={toggleColorMode}>
            {useColorModeValue(<MoonIcon />, <SunIcon />)}
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default NavigationBar;
