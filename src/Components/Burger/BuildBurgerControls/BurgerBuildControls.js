import React from 'react';
import BurgerBuildControl from './BurgerBuildControl/BurgerBuildControl';
import { List, Button, Segment } from 'semantic-ui-react';
import classes from './BurgerBuildControls.module.css';
import Bacon from './../../../assets/images/bacon.jpg';
import Cheese from './../../../assets/images/cheese.jpg';
import Lamb from './../../../assets/images/lamb.jpeg';
import Chicken from './../../../assets/images/chicken.jpeg';
import Salad from './../../../assets/images/salad.jpg';
import Lettuce from './../../../assets/images/lettuce.jpg';
import Onion from './../../../assets/images/onion.jpeg';
import Mayo from './../../../assets/images/mayo.jpg';
import Ketchup from './../../../assets/images/ketchup.jpeg';
import Jalapeno from './../../../assets/images/jalapeno.jpg';

const IngredientList = [
  { label: 'Bacon',      type: 'bacon',      image: Bacon },
  { label: 'Cheese',     type: 'cheese',     image: Cheese },
  { label: 'Lamb',       type: 'lamb',       image: Lamb },
  { label: 'Chicken',    type: 'chicken',    image: Chicken },
  { label: 'Salad',      type: 'salad',      image: Salad },
  { label: 'Lettuce',    type: 'lettuce',    image: Lettuce },
  { label: 'Onion',      type: 'onion',      image: Onion },
  { label: 'Mayonnaise', type: 'mayonnaise', image: Mayo },
  { label: 'Ketchup',    type: 'ketchup',    image: Ketchup },
  { label: 'Jalapeno',   type: 'jalapeno',   image: Jalapeno },
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
                imageUrl={ingredient.image}
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