import {
  Box,
  Spacer,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  useDisclosure,
  useColorModeValue,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { HomeButton } from "../ui/HomeButton";

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

const DropDownMenu = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        size={"md"}
        icon={<HamburgerIcon />}
        aria-label={"Open Menu"}
        display={{ md: "none" }}
        onClick={isOpen ? onClose : onOpen}
      ></MenuButton>

      <MenuList>
        {InternalLinks.map((link, i) => (
          <MenuItem key={i} as={RouterLink} to={link.url}>
            {link.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

const NavLink = ({ children, url }) => {
  const { pathname } = useLocation();

  const active = pathname === url;
  const activeColor = useColorModeValue("yellow.400", "yellow.500");

  return (
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
      bg={active ? activeColor : undefined}
    >
      {children}
    </Link>
  );
};

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

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} boxShadow="lg" position={"fixed"} w={"100%"} zIndex={2}>
      <Flex h={16} alignItems={"center"} justifyContent="space-evenly">
        <HomeButton />

        <Spacer />

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

        <Spacer />

        <Button
          as={IconButton}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
          size="md"
        >
          {useColorModeValue(<MoonIcon />, <SunIcon />)}
        </Button>

        <Box ml={2} display={{ base: "inline-block", md: "none" }}>
          <DropDownMenu />
        </Box>
      </Flex>
    </Box>
  );
};

export default NavigationBar;
