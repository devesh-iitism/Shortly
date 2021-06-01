import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';
import GlobalStyles from './GlobalStyles';


class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <Navbar />
        <Boost />
        <Footer />
      </div>
    )
  }
}

export default App;