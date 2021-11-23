import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import theme from './themes/theme';

ReactDOM.render(
  <ChakraProvider>
    <ColorModeScript initialColorMode = {theme.config.initialColorMode} />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
