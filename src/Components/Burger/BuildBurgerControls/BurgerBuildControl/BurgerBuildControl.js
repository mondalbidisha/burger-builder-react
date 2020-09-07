import React from 'react';
import { Image, List, Grid, Icon, Button } from 'semantic-ui-react';
// import classes from './BuildControl.css';

const BurgerBuildControl = (props) => (
    <List.Item>
      <Grid columns={2} verticalAlign='middle'>
        <Grid.Column width={2}>
          <Image avatar src='/images/avatar/small/daniel.jpg' />
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
    // <div className={classes.BuildControl}>
    //   <div className={classes.Label}>{props.label}</div>
    //   <button 
    //       className={classes.Less} 
    //       onClick={props.removed} 
    //       disabled={props.disabled}>Less</button>
    //   <button 
    //       className={classes.More} 
    //       onClick={props.added}>More</button>
    // </div>
);

export default BurgerBuildControl;