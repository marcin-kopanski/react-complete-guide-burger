import React, {Component} from 'react';

import Button from '../../ui/Button/Button';

class OrderSummary extends Component {

	componentWillUpdate() {
		console.log('[OrderSummary] WillUpdate');
	}

	render() {
		const ingredientSummary = Object.keys(this.props.ingredients)
			.map(igKey => {
				return (
					<li key={igKey}>
						<span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
					</li>
				);
			});

		return (
			<React.Fragment>
				<h3>Your Order</h3>
				<p>A delicious burger with the following ingredients:</p>
				<ul>
					{ingredientSummary}
				</ul>
				<p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
				<p>Continue to checkout?</p>
				<Button buttonType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
				<Button buttonType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
			</React.Fragment>
		);
	}
};

export default OrderSummary;