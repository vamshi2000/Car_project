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
           <i className="fa fa-facebook padding-horiz-xl"></i>
           <i className="fa fa-twitter padding-horiz-xs"></i>
           <i className="fa fa-instagram padding-horiz-xl"></i>
           </div>
          </div>
        </section>
    );
}
}

export default HeaderBottom;