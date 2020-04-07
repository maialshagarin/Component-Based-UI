import React from 'react';
import Main from '../main/main.js';
import Footer from '../footer/footer.js';
import Header from '../header/header.js';
import './app.scss';


class App extends React.Component {
  
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>

    );
  }

}
export default App ;