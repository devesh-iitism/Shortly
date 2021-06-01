import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Statistics from './components/Statistics/Statistics';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';
import GlobalStyles from './GlobalStyles';


class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <Navbar />
        <Header />
        <Statistics />
        <Boost />
        <Footer />
      </div>
    )
  }
}

export default App;