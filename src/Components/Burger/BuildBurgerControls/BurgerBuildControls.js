import React from 'react';
import BurgerBuildControl from './BurgerBuildControl/BurgerBuildControl';
import { List, Button, Segment, Grid } from 'semantic-ui-react';
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
  { label: 'Bacon',      type: 'bacon',      image: Bacon,    price: 1.4 },
  { label: 'Cheese',     type: 'cheese',     image: Cheese,   price: 0.6 },
  { label: 'Lamb',       type: 'lamb',       image: Lamb,     price: 1.2 },
  { label: 'Chicken',    type: 'chicken',    image: Chicken,  price: 1.1 },
  { label: 'Salad',      type: 'salad',      image: Salad,    price: 0.5 },
  { label: 'Lettuce',    type: 'lettuce',    image: Lettuce,  price: 0.3 },
  { label: 'Onion',      type: 'onion',      image: Onion,    price: 0.3 },
  { label: 'Mayonnaise', type: 'mayonnaise', image: Mayo,     price: 0.2 },
  { label: 'Ketchup',    type: 'ketchup',    image: Ketchup,  price: 0.2 },
  { label: 'Jalapeno',   type: 'jalapeno',   image: Jalapeno, price: 0.5 },
]

const BurgerBuildControls = () => {
  return (
    <div className={classes.BuildControls}>
      <Segment raised textAlign='center' className={classes.ListTitleSegment}>
        Ingredient Customisation
      </Segment>
      <Segment raised textAlign='center' className={classes.ControlsSegment}>
        <List divided verticalAlign='middle'>
          {IngredientList.map((ingredient, index) => {
            return (
              <BurgerBuildControl
                key={index}
                imageUrl={ingredient.image}
                price={ingredient.price}
                itemName={ingredient.label}
              />
            )
          })}
        </List>
      </Segment>
      <Segment raised textAlign='center' className={classes.OrderButtonSegment}>
        <Grid columns={2} verticalAlign='middle'>
          <Grid.Column width={8}>
            <h2>TOTAL PRICE - $ 0</h2>
          </Grid.Column>
          <Grid.Column width={8}>
            <Button className={classes.OrderButton}>Order Now</Button>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  )
}

export default BurgerBuildControls;