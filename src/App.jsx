import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Home from './Home/Home';

class App extends React.Component() {
  render(){
    return (
      <>
      <h1>Hello World!</h1>
        <NavBar/>
        <Home/>
        <Footer/>
      </>
    );
  }
}

export default App;
