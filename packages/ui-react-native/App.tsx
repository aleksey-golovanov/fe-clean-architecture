/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {build} from '@fe-clean-architecture/composer';
import React from 'react';

import {AppContext} from './app-context';
import {DefaultScreen} from './screens/default';

const App: React.FC = () => {
  const app = build({baseUrl: 'http://base-url'});

  return (
    <AppContext.Provider value={{app}}>
      <DefaultScreen />
    </AppContext.Provider>
  );
};

export default App;
