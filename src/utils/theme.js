import { extendTheme } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 5,
      },
    },
  },
};

const theme = extendTheme({ config, components });
export default theme;
