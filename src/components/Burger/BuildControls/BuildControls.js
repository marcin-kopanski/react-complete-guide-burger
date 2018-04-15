import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css';

const controls = [
	{label: 'Salad', type: 'salad' },
	{label: 'Bacon', type: 'bacon' },
	{label: 'Cheese', type: 'cheese' },
	{label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
	<div className={classes.buildControls}>
		<p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
		{controls.map(ctrl =>(
			<BuildControl
				key={ctrl.label}
				label={ctrl.label}
				disabled={props.disabled[ctrl.type]}
				removed={() => props.ingredientRemoved(ctrl.type)}
				added={() => props.ingredientAdded(ctrl.type)}/>
		))}

		<button
			onClick={() => props.ordered()}
			className={classes.orderButton}
			disabled={!props.purchaseable}>ORDER NOW</button>
	</div>
);

export default buildControls;