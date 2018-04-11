import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {

	render() {
		let ingredient = null;

		switch (this.props.type) {
			case('bread-bottom'):
				ingredient = <div className={classes.BreadBottom}>this.props.type</div>;
				break;

			case('bread-top'):
				ingredient = (
					<div className={classes.BreadTop}>
						<div className={classes.Seeds1}>this.props.type</div>
						<div className={classes.Seeds2}>this.props.type</div>
					</div>
				);
				break;

			case('meat'):
				ingredient = <div className={classes.Meat}>this.props.type</div>;
				break;

			case('cheese'):
				ingredient = <div className={classes.Cheese}>this.props.type</div>;
				break;

			case('bacon'):
				ingredient = <div className={classes.Bacon}>this.props.type</div>;
				break;

			case('salad'):
				ingredient = <div className={classes.Salad}>this.props.type</div>;
				break;

			default:
				ingredient = null;
		}

		return ingredient;
	}
};

BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired
};

export default BurgerIngredient;