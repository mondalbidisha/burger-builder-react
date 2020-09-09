import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { Grid } from 'semantic-ui-react';

const burger = (props) => {
  let transformedIngredients = [];
  props.ingredients.forEach((ingredient, index) => {
    if(ingredient.qty) {
      console.log(ingredient.qty);
      for(let i = 1; i <= ingredient.qty; i++) {
        let arrItem = <BurgerIngredient key={Math.random()} type={ingredient.type}/>;   
        transformedIngredients.push(arrItem);
      }
    }
  }) 
  if (transformedIngredients.length === 0) {
    transformedIngredients = <h2>Please add ingredients!</h2>;
  }
  return (
    <Grid verticalAlign='middle'>
      <Grid.Column width={16} verticalAlign='middle'>
        <div className={classes.Burger}>
          <BurgerIngredient type="bread-top" />
            {transformedIngredients}
          <BurgerIngredient type="bread-bottom" />
        </div>
      </Grid.Column>
    </Grid>    
  );
};

export default burger;