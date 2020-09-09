import React, { Component } from 'react';
import Aux from './../HOC/Aux';
import AlertBox from './../Components/AlertBox/AlertBox';
import classes from './BurgerBuilder.module.css';
import BurgerBuildControls from './../Components/Burger/BuildBurgerControls/BurgerBuildControls';
import Burger from './../Components/Burger/Burger';
import { Segment, Grid } from 'semantic-ui-react';

class BurgerBuiler extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 4,
      purchasable: true,
      purchasing: false,
      checkoutItems: [],
      openModal: false,
      IngredientList: [
        { label: 'Bacon',      type: 'bacon',      image: 'bacon.jpg',     price: 1.4, qty: 0 },
        { label: 'Cheese',     type: 'cheese',     image: 'cheese.jpg',    price: 0.6, qty: 0 },
        { label: 'Lamb',       type: 'lamb',       image: 'lamb.jpeg',     price: 1.2, qty: 0 },
        { label: 'Chicken',    type: 'chicken',    image: 'chicken.jpeg',  price: 1.1, qty: 0 },
        { label: 'Salad',      type: 'salad',      image: 'salad.jpg',     price: 0.5, qty: 0 },
        { label: 'Lettuce',    type: 'lettuce',    image: 'lettuce.jpg',   price: 0.3, qty: 0 },
        { label: 'Onion',      type: 'onion',      image: 'onion.jpeg',    price: 0.3, qty: 0 },
        { label: 'Mayonnaise', type: 'mayonnaise', image: 'mayo.jpg',      price: 0.2, qty: 0 },
        { label: 'Ketchup',    type: 'ketchup',    image: 'ketchup.jpeg',  price: 0.2, qty: 0 },
        { label: 'Jalapeno',   type: 'jalapeno',   image: 'jalapeno.jpg',  price: 0.5, qty: 0 },
      ]
    }
    this.addIngredientHandler = this.addIngredientHandler.bind(this);
    this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
    this.updatePurchasableState = this.updatePurchasableState.bind(this);
    this.prepareCheckout = this.prepareCheckout.bind(this);
    this.toggleModalHandler = this.toggleModalHandler.bind(this);
  }

  updatePurchasableState() {
    let sum = 0;
    this.state.IngredientList.forEach((item) => {
      sum = sum + item.qty
    });
    if(sum > 0) {
      this.setState({
        purchasable: false
      })
    } else {
      this.setState({
        purchasable: true
      })
    }
  }

  addIngredientHandler(ingredient) {
    const currentIngredient = this.state.IngredientList.find(item => item.type === ingredient.type);
    const updatedItemCount = currentIngredient.qty + 1;
    const updatedIngredients = this.state.IngredientList;
    updatedIngredients.map(item => {
      if (item.type === ingredient.type) {
        item.qty = updatedItemCount 
      }
      return item; 
    });
    const priceAddition = currentIngredient.price;
    const updatePrice = this.state.totalPrice + priceAddition;
    this.setState({ 
      totalPrice: updatePrice, 
      IngredientList: updatedIngredients
    }); 
    this.updatePurchasableState();
  }

  removeIngredientHandler(ingredient) {
    const currentIngredient = this.state.IngredientList.find(item => item.type === ingredient.type);
    const updatedItemCount = currentIngredient.qty - 1;
    const updatedIngredients = this.state.IngredientList;
    updatedIngredients.map(item => {
      if (item.type === ingredient.type) {
        item.qty = updatedItemCount 
      }
      return item; 
    });
    const priceReduction = currentIngredient.price;
    const updatePrice = this.state.totalPrice - priceReduction;
    this.setState({ 
      totalPrice: updatePrice, 
      IngredientList: updatedIngredients
    });
    this.updatePurchasableState();
  }

  prepareCheckout() {
    const ingredients = this.state.IngredientList;
    const addedIngredients = ingredients.filter((item) => {
      if(item.qty > 0) {
        return item;
      }
    });
    this.setState({
      checkoutItems: addedIngredients,
      openModal: true,
    }) 
  }

  toggleModalHandler(property) {
    this.setState({
      openModal: property,
    }) 
  }

  render() {
    return (
      <Aux>
        <AlertBox
         totalPrice={this.state.totalPrice}
         checkoutItems={this.state.checkoutItems}
         openModal={this.state.openModal}
         toggleModal={this.toggleModalHandler}
        />
        <Segment raised className={classes.BurgerSegment}>
          <Grid columns={2} verticalAlign='middle' className={classes.BurgerGrid}>
            <Grid.Column width={9} verticalAlign='middle' className={classes.BurgerComponent}>
              <Burger 
               ingredients={this.state.IngredientList}
              />
            </Grid.Column>
            <Grid.Column width={7}>
              <BurgerBuildControls
               totalPrice={this.state.totalPrice}
               purchasable={this.state.purchasable}
               prepareCheckout={this.prepareCheckout}
               IngredientList={this.state.IngredientList}
               ingredientAdded={this.addIngredientHandler}
               ingredientRemoved={this.removeIngredientHandler}
              />
            </Grid.Column>
          </Grid>
        </Segment>
      </Aux>
    )
  }
}

export default BurgerBuiler
