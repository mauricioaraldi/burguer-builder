import React from 'react';
import './Contact.css';
import { Redirect } from 'react-router-dom';
import { BurguerContext } from '../context/BurguerContext';

interface Props {};

interface State {};

/**
 * Class that controls the Contact screen
 *
 * @class
 */
class Contact extends React.Component<Props, State> {
	/**
	 * Render
	 */
	render() {
		const { burguer, setBurguer } = this.context;

		return (
				<div id="contact">
					<p>Please, fill your information for delivery</p>

					<form>
						<label>
							<span>Name</span>
							<input type="text" placeholder="John Smith"/>
						</label>
						<label>
							<span>Address</span>
							<input type="text" placeholder="Ocean Avenue, 23"/>
						</label>
						<button
							onClick={() => {
								alert('Shipping your burguer!');
								setBurguer([]);
							}}
							type="submit"
						>
							Order!
						</button>
					</form>

					{ !burguer.length ? <Redirect to={'/'}/> : null }
				</div>
		);
	}
}

Contact.contextType = BurguerContext;

export default Contact;