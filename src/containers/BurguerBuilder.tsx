import React from 'react';
import Burguer from '../components/Burguer';
import './BurguerBuilder.css';
import IngredientTypesAndPrices from '../IngredientTypesAndPrices';
import IngredientControls from '../components/IngredientControls';
import { History, LocationState } from 'history';
import { BurguerContext } from '../context/BurguerContext';
import BurguerUtils from '../BurguerUtils';

interface Props {
	history: History<LocationState>
}

interface State {};

/**
 * Class that controls all the Burguer Builder main screen
 *
 * @class
 */
class BurguerBuilder extends React.Component<Props, State> {
	MAX_INGREDIENT_QT: number = 10;
	MINIMAL_PRICE: number = 3;

	/**
	 * Adds a ingredient to the state
	 *
	 * @author mauricio.araldi
	 * @since 0.1.0
	 * 
	 * @param {string} ingredient The ingredient to be added
	 */
	addIngredient(ingredient: string) {
		const burguer = this.context.burguer.slice(),
			setBurguer = this.context.setBurguer;

		if (burguer.length === this.MAX_INGREDIENT_QT) {
			return alert(`You can't add more than ${this.MAX_INGREDIENT_QT} ingredients :(`);
		}

		burguer.push(ingredient);
		setBurguer(burguer);
	}

	/**
	 * Removes a ingredient from the state
	 *
	 * @author mauricio.araldi
	 * @since 0.1.0
	 * 
	 * @param {string} ingredient The ingredient to be removed
	 */
	removeIngredient(ingredient: string) {
		const burguer = this.context.burguer.slice(),
			setBurguer = this.context.setBurguer,
			index = burguer.lastIndexOf(ingredient);

		if (index === -1) {
			let name = ingredient.slice(0, 1).concat(ingredient.slice(1).toLowerCase());
			return alert(`There's no ${name} to remove!`);
		}

		burguer.splice(index, 1);
		setBurguer(burguer);
	}

	/**
	 * Renders the controllers for each ingredient type
	 *
	 * @author mauricio.araldi
	 * @since 0.1.0
	 * 
	 * @return {Element[]} The controllers elements to be rendered on screen
	 */
	renderIngredientControls(): Object[] {
		const burguer = this.context.burguer,
			elements = [];

		for (let key in IngredientTypesAndPrices) {
			let name: string = key,
				quantity: number = BurguerUtils.countIngredient(burguer, key);

			name = key.slice(0, 1).concat(key.slice(1).toLowerCase());

			elements.push(
				<div key={`${key}_controller`}>
					<IngredientControls
						addAction={() => this.addIngredient(key)}
						addDisabled={burguer.length >= 10}
						name={name}
						quantity={quantity}
						removeAction={() => this.removeIngredient(key)}
						removeDisabled={quantity <= 0}
					/>
				</div>
			);
		}

		return elements;
	}

	/**
	 * Render
	 */
	render() {
		const { burguer } = this.context,
			{ history } = this.props,
			burguerPrice = BurguerUtils.getBurguerPrice(burguer),
			readablePrice = burguerPrice.toFixed(2).replace('.', ',');

		return (
			<React.Fragment>
				<Burguer ingredients={burguer}/>
				<p id="price">{`€ ${readablePrice}`}</p>
				<div id="controller">{this.renderIngredientControls()}</div>
				<button
					disabled={burguerPrice < this.MINIMAL_PRICE}
					id="order"
					onClick={event => history.push('/checkout')}
				>
					{burguerPrice < this.MINIMAL_PRICE ? `The minimal price for a burguer is € ${this.MINIMAL_PRICE},00`: 'Order now!'}
				</button>
			</React.Fragment>
		);
	}
}

BurguerBuilder.contextType = BurguerContext;

export default BurguerBuilder;