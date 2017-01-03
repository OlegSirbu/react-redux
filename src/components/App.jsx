import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainPage from './MainPage.jsx';

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MuiThemeProvider>
        <MainPage />
      </MuiThemeProvider>
    );
  }
}