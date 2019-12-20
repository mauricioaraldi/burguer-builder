import React from 'react';
import './Checkout.css';
import Burguer from '../components/Burguer';
import { BurguerContext } from '../context/BurguerContext';
import { History, LocationState } from 'history';
import { Redirect } from 'react-router-dom';
import BurguerUtils from '../BurguerUtils';

interface Props {
	history: History<LocationState>
};

interface State {};

/**
 * Class that controls the Checkout screen
 *
 * @class
 */
class Checkout extends React.Component<Props, State> {
	/**
	 * Render
	 */
	render() {
		const { burguer, setBurguer } = this.context,
			{ history } = this.props;

		return (
			<React.Fragment>
				<Burguer ingredients={burguer}/>

				<div id="checkout">
					<span>Do you really want to check out this burguer for € ${BurguerUtils.getBurguerPrice(burguer)}?</span>

					<button
						onClick={() => {
							alert('Shipping your burguer!');
							setBurguer([]);
							history.push('/');
						}}
					>
						Yes
					</button>
					<button
						onClick={() => history.push('/')}
					>
						No
					</button>
				</div>

				{ !burguer.length ? <Redirect to={'/'}/> : null }
			</React.Fragment>
		);
	}
}

Checkout.contextType = BurguerContext;

export default Checkout;