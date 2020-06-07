import React from 'react';
import { Provider } from 'react-redux';
import { NativeRouter } from 'react-router-native';
import { createStore } from 'redux';
import { reducers } from './redux';
import { routes } from './routes';

const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        {/* TODO Navigation Menu */}
        {routes.map(route => route)}
      </NativeRouter>
    </Provider>
  );
};

export default App;
