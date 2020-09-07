import React from 'react';
import BurgerBuildControl from './BurgerBuildControl/BurgerBuildControl';
import { List, Button, Segment } from 'semantic-ui-react';
import classes from './BurgerBuildControls.module.css';

const IngredientList = [
  { label: 'Bacon',      type: 'bacon' },
  { label: 'Cheese',     type: 'cheese' },
  { label: 'Lamb',       type: 'lamb' },
  { label: 'Chicken',    type: 'chicken' },
  { label: 'Salad',      type: 'salad' },
  { label: 'Lettuce',    type: 'lettuce' },
  { label: 'Onion',      type: 'onion' },
  { label: 'Mayonnaise', type: 'mayonnaise' },
  { label: 'Ketchup',    type: 'ketchup' },
  { label: 'Jalapeno',   type: 'jalapeno' },
]

const BurgerBuildControls = () => {
  return (
    <div className={classes.BuildControls}>
      <Segment raised textAlign='center' className={classes.ControlsSegment}>
        <List divided verticalAlign='middle'>
          {IngredientList.map((ingredient, index) => {
            return (
              <BurgerBuildControl
                key={index}
                itemName={ingredient.label}
              />
            )
          })}
        </List>
        <Button className={classes.OrderButton}>Order Now</Button>
      </Segment>
    </div>
  )
}

export default BurgerBuildControls;