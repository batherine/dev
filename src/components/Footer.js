import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" py={10}>
      &copy; {new Date().getFullYear()} Catherine Dougherty. All Rights
      Reserved.
    </Box>
  );
};

export default Footer;
