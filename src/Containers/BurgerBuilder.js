import React, { Component } from 'react';
import Aux from './../HOC/Aux';
import BurgerBuildControls from './../Components/Burger/BuildBurgerControls/BurgerBuildControls'

class BurgerBuiler extends Component {

  render() {
    return (
      <Aux>
        {/* <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
            <OrderSummary 
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />
        </Modal> */}
        {/* <Burger ingredients={this.state.ingredients} /> */}
        <BurgerBuildControls/>
            {/* ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
            price={this.state.totalPrice}  */}
      </Aux>
    )
  }
}

export default BurgerBuiler
