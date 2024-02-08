// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#FCFDFE',
        font: 'Poppins',
        color: '#164951'
      },
    },
  },
});

export default theme;