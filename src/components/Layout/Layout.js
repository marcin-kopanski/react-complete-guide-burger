import React from 'react';

import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrwaer/SideDrawer';

const layout = (props) => (
	<React.Fragment>
		<Toolbar/>
		<SideDrawer/>
		<main className={classes.content}>
			{props.children}
		</main>
	</React.Fragment>
);

export default layout;