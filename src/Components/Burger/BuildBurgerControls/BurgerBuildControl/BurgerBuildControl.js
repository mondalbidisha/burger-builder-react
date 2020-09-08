import React from 'react';
import { List, Grid, Icon, Button } from 'semantic-ui-react';
import classes from './../BurgerBuildControl/BurgerBuildControl.module.css';

const BurgerBuildControl = (props) => (
    <List.Item>
      <Grid columns={2} verticalAlign='middle'>
        <Grid.Column width={3}>
          <img src={`images/${props.imageUrl}`} alt={props.type} className={classes.ItemImageRef} />
        </Grid.Column>
        <Grid.Column width={5}>
          <List.Content>
            <List.Header>
              <span className={classes.ItemLabelInfo}>{props.itemName}</span>
            </List.Header>
          </List.Content>
        </Grid.Column>
        <Grid.Column width={2}>
          <Button icon color='red'
           onClick={props.removeItem}
           disabled={!(props.qty)}
          >
            <Icon name='minus' />
          </Button>
        </Grid.Column>
        <Grid.Column width={2}>
          <span className={classes.ItemLabelInfo}>{props.qty}</span>
        </Grid.Column>
        <Grid.Column width={2}>
          <Button icon color='green'
           onClick={props.addItem}
          >
            <Icon name='add' />
          </Button>
        </Grid.Column>
        <Grid.Column width={2}>
          <span className={classes.ItemLabelInfo}>$ {props.price}</span>
        </Grid.Column>
      </Grid>
    </List.Item>
);

export default BurgerBuildControl;