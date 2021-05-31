import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './GlobalStyles';


class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <Navbar />
      </div>
    )
  }
}

export default App;