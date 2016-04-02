import React from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import { App } from './containers';

export default () => {
  const createStoreWithMiddleware = applyMiddleware()(createStore);
  const reducer = combineReducers(reducers);
  const store = createStoreWithMiddleware(reducer);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
