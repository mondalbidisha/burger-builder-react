import React, { Component } from 'react';
import Aux from './../HOC/Aux';
import BurgerBuildControls from './../Components/Burger/BuildBurgerControls/BurgerBuildControls'

class BurgerBuiler extends Component {

  render() {
    return (
      <Aux>
        <Burger/>
        <BurgerBuildControls/>
      </Aux>
    )
  }
}

export default BurgerBuiler
