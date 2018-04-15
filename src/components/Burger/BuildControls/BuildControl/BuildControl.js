import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
	<div className={classes.buildControl}>
		<div className={classes.label}>{props.label}</div>
		<button onClick={props.removed} className={classes.less} disabled={props.disabled}>Less</button>
		<button onClick={props.added} className={classes.more}>More</button>
	</div>
);

export default buildControl;