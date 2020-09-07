import React, { Component } from 'react';
import Aux from './Aux';
import NavBar from './../Components/NavBar';

class Layout extends Component {

  constructor() {
    super();
    this.state = {
      navItems: ['Burger Builder', 'Checkout']
    }
  }
   
  render() {
    return (
      <Aux>
        <NavBar
          title="Build Your Burger"
          navItems={this.state.navItems}
        />
        <main>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;