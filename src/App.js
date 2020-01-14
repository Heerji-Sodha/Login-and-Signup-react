import React from 'react';
import './App.css';
import { Paper } from '@material-ui/core';
import { Provider } from 'react-redux'
import Store from './Store/index'

import BasicRouter from './config/Router/Router'
class App extends React.Component {
  render() {

    return (
      <Provider store={Store}>
        <BasicRouter />
      </Provider>

    );
  }
}

export default App;
