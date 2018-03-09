import React, { Component } from 'react';

class HeaderTop extends Component {
    render() {
      return (
        <section id="headerTop">
          <div id="headerTopWrapper" className="grid bordered--bottom text-xs-center">
          <div className="col-12">
           <small>Car Rental Corporation</small>
           </div>
          </div>
        </section>
    );
}
}

export default HeaderTop;