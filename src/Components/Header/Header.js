import React from 'react';
import Logo from './../Logo/Logo';
import { Segment, Grid } from 'semantic-ui-react';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Segment raised textAlign='center' className={classes.segmentHeader}>
      <Grid columns={3} verticalAlign='middle'>
        <Grid.Column floated='left' width={1}>
          <Logo />
        </Grid.Column>
        <Grid.Column width={15}>
          <h2>{props.title}</h2>
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default Header;