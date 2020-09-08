import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
  
  render () {
    let ingredient = null;
    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case ('bread-top'):
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case ('chicken'):
        ingredient = <div className={classes.Chicken}></div>;
        break;
      case ('lamb'):
        ingredient = <div className={classes.Lamb}></div>;
        break;
      case ('lettuce'):
        ingredient = <div className={classes.Lettuce}></div>;
        break;
      case ('cheese'):
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case ('onion'):
        ingredient = <div className={classes.Onion}></div>;
        break;
      case ('mayonnaise'):
        ingredient = <div className={classes.Mayonnaise}></div>;
        break;
      case ('bacon'):
        ingredient = <div className={classes.Bacon}></div>;
        break;
      case ('ketchup'):
        ingredient = <div className={classes.Ketchup}></div>;
        break;
      case ('jalapeno'):
        ingredient = <div className={classes.Jalapeno}></div>;
        break;
      case ('salad'):
        ingredient = <div className={classes.Salad}></div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;