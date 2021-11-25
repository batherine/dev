import { extendTheme } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });
export default theme;
