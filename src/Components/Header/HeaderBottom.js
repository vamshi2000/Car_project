import React, { Component } from 'react';

class HeaderBottom extends Component {
    render() {
      return (
        <section id="headerBottom">
          <div id="headerBottomWrapper" className="container grid bordered--bottom text-xs-center padding-xl">
          <div className="col-4"></div>
          <div className="col-8">
           <a href="#" className="padding-horiz-xl">Home</a>
           <a href="#" className="padding-horiz-xl">Special Offers</a>
           <a href="#" className="padding-horiz-xl">Contact</a>
           <a href="#" className="padding-horiz-xl">About us</a>
           <i className="fab fa-facebook-f padding-horiz-xl"></i>
           </div>
          </div>
        </section>
    );
}
}

export default HeaderBottom;