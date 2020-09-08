import React from 'react';
import { List, Grid, Icon, Button } from 'semantic-ui-react';
import classes from './../BurgerBuildControl/BurgerBuildControl.module.css';

const BurgerBuildControl = (props) => (
    <List.Item>
      <Grid columns={2} verticalAlign='middle'>
        <Grid.Column width={2}>
          <img src={props.imageUrl} alt="bacon" className={classes.imageStyling} />
        </Grid.Column>
        <Grid.Column width={6}>
          <List.Content>
            <List.Header>
              <h3>{props.itemName}</h3>
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
          0
        </Grid.Column>
        <Grid.Column width={2}>
          <Button icon color='green'
           onClick={props.removed}
           disabled={props.disabled} 
          >
            <Icon name='add' />
          </Button>
        </Grid.Column>
      </Grid>
    </List.Item>
);

export default BurgerBuildControl;