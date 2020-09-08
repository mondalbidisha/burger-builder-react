import React from 'react';
import classes from './Logo.module.css';

const logo = () => (
	<div className={classes.Logo}>
		<img src='/images/burger-logo.png' alt="MyBurger" />
	</div>
);

export default logo;