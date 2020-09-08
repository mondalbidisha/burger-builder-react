import React, { Component } from 'react';
import Aux from './../HOC/Aux';
import BurgerBuildControls from './../Components/Burger/BuildBurgerControls/BurgerBuildControls';
import Burger from './../Components/Burger/Burger';
import { Segment, Grid } from 'semantic-ui-react';

class BurgerBuiler extends Component {

  render() {
    return (
      <Aux>
        <Segment raised>
          <Grid columns={2} verticalAlign='middle'>
            <Grid.Column width={9}>
              <Burger/>
            </Grid.Column>
            <Grid.Column width={7}>
              <BurgerBuildControls/>
            </Grid.Column>
          </Grid>
        </Segment>
      </Aux>
    )
  }
}

export default BurgerBuiler
