import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme";

ReactDOM.render(
  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
