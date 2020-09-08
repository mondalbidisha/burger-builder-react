import React from 'react';
import BurgerBuildControl from './BurgerBuildControl/BurgerBuildControl';
import { List, Button, Segment, Grid } from 'semantic-ui-react';
import classes from './BurgerBuildControls.module.css';

const BurgerBuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <Segment raised textAlign='center' className={classes.ListTitleSegment}>
        Ingredient Customisation
      </Segment>
      <Segment raised textAlign='center' className={classes.ControlsSegment}>
        <List divided verticalAlign='middle'>
          {props.IngredientList.map((ingredient, index) => {
            return (
              <BurgerBuildControl
                key={index}
                qty={ingredient.qty}
                imageUrl={ingredient.image}
                price={ingredient.price}
                itemName={ingredient.label}
                addItem={() => props.ingredientAdded(ingredient)}
                removeItem={() => props.ingredientRemoved(ingredient)}
              />
            )
          })}
        </List>
      </Segment>
      <Segment raised textAlign='center' className={classes.OrderButtonSegment}>
        <Grid columns={2} verticalAlign='middle'>
          <Grid.Column width={8}>
            <h2>TOTAL PRICE - $ {props.totalPrice.toFixed(2)}</h2>
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