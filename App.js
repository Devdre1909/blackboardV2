import React from 'react';
import {View} from 'react-native';
import { ThemeProvider } from 'styled-components';
import Providers from './src/navigation';
import { defaultTheme } from './src/utils';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Providers />
    </ThemeProvider>
  );
};

export default App;
