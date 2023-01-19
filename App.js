import 'react-native-get-random-values'
import React from 'react';
import {ThemeProvider} from 'styled-components';

import Providers from './src/navigation';
import {defaultTheme} from './src/utils';
import RealmContext from './src/models';

const App = () => {
  const {RealmProvider} = RealmContext;

  return (
    <ThemeProvider theme={defaultTheme}>
      <RealmProvider>
        <Providers />
      </RealmProvider>
    </ThemeProvider>
  );
};

export default App;
