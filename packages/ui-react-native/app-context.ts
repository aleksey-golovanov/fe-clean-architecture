import {App} from '@fe-clean-architecture/composer';
import React from 'react';

export type AppContextType = {
  app: App;
};

export const AppContext = React.createContext<AppContextType>(
  {} as AppContextType,
);
