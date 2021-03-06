import React, { Component } from 'react';
// import '../Styles/App.css';
import Header from './Header/Header';

class App extends Component {
  render() {
    return (
      <main id="main">
      <Header />
      <section id="grid">
      <div className="container">
        <div className="grid">
          <div className="col-1 col-md-6 col-lg-12 bordered--bottom">
            Hello
          </div>
          <div className="col-1 col-md-6 col-lg-12 bordered--right">
            Hello
          </div>
          <div className="col-1">
            Hello
          </div>
        </div>

        <div className="grid">
          <div className="col-3">
            Three on a new line
          </div>
        </div>
      </div>
    </section>

    </main>
    );
  }
}

export default App;
