import React from 'react';
import { List, Grid, Icon, Button } from 'semantic-ui-react';
import classes from './../BurgerBuildControl/BurgerBuildControl.module.css';

const BurgerBuildControl = (props) => (
    <List.Item>
      <Grid columns={2} verticalAlign='middle'>
        <Grid.Column width={3}>
          <img src={props.imageUrl} alt="bacon" className={classes.ItemImageRef} />
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
           onClick={props.removed}
           disabled={props.disabled}
          >
            <Icon name='minus' />
          </Button>
        </Grid.Column>
        <Grid.Column width={2}>
          <span className={classes.ItemLabelInfo}>0</span>
        </Grid.Column>
        <Grid.Column width={2}>
          <Button icon color='green'
           onClick={props.removed}
           disabled={props.disabled} 
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