import React from 'react';
import Logo from './../Logo/Logo';
import { Segment, Grid, Menu } from 'semantic-ui-react';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Segment raised textAlign='center' className={classes.segmentHeader}>
      <Grid columns={3} verticalAlign='middle'>
        <Grid.Column floated='left' width={1}>
          <Logo />
        </Grid.Column>
        <Grid.Column width={10}>
          <h2>{props.title}</h2>
        </Grid.Column>
        <Grid.Column floated='right' width={3} className={classes.menuColumn}>
          {/* <Menu pagination className={classes.paginationMenu}>
            {props.navItems.map((nav, index) => {
              return (
                <Menu.Item
                  className={nav === 'Burger Builder' ? classes.activeMenuItem : classes.menuItem}
                  key={index}
                  name={nav}
                  active={nav === 'Burger Builder'}
                  >
                  {nav}
                </Menu.Item>  
              )
            })}
          </Menu> */}
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default Header;