import React from 'react';
import Burguer from '../components/Burguer';
import IngredientTypesAndPrices from '../IngredientTypesAndPrices';
import './BurguerBuilder.css';
import IngredientControls from '../components/IngredientControls';

interface Props {}

interface State {
	ingredients: string[]
};

/**
 * Class that controls all the Burguer Builder main screen
 *
 * @class
 */
class BurguerBuilder extends React.Component<Props, State> {
	MAX_INGREDIENT_QT: number = 10;

	/**
	 * Constructor
	 */
	constructor(props: Props) {
		super(props);
		this.state = {ingredients: []};
	}

	/**
	 * Adds a ingredient to the state
	 *
	 * @author mauricio.araldi
	 * @since 0.1.0
	 * 
	 * @param {string} ingredient The ingredient to be added
	 */
	addIngredient(ingredient: string) {
		if (this.state.ingredients.length === this.MAX_INGREDIENT_QT) {
			return alert(`You can't add more than ${this.MAX_INGREDIENT_QT} ingredients :(`);
		}

		this.state.ingredients.push(ingredient);
		this.setState({ingredients: this.state.ingredients});
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
		let index = this.state.ingredients.lastIndexOf(ingredient);

		if (index === -1) {
			let name = ingredient.slice(0, 1).concat(ingredient.slice(1).toLowerCase());
			return alert(`There's no ${name} to remove!`);
		}

		this.state.ingredients.splice(index, 1);
		this.setState({ingredients: this.state.ingredients});
	}

	/**
	 * Checks how many of that ingredient exists in the burguer
	 *
	 * @author mauricio.araldi
	 * @since 0.1.0
	 *
	 * @param {string[]} burguer The burguer to check
	 * @param {string} ingredient The ingredient to be counted
	 * @return {number} The amount of that ingredient type in the burguer
	 */
	countIngredient(burguer: string[], ingredient: string): number {
		return burguer.reduce((quantity: number, curIngredient: string) => {
			return quantity += curIngredient === ingredient ? 1 : 0;
		}, 0);
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
		const elements = [];

		for (let key in IngredientTypesAndPrices) {
			let name: string = key,
				quantity: number = this.countIngredient(this.state.ingredients, key);

			name = key.slice(0, 1).concat(key.slice(1).toLowerCase());

			elements.push(
				<div key={`${key}_controller`}>
					<IngredientControls
						addAction={() => this.addIngredient(key)}
						addDisabled={this.state.ingredients.length >= 10}
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
	 * Gets the price of the burguer, based on ingredients
	 *
	 * @author mauricio.araldi
	 * @since 0.1.0
	 * 
	 * @param {string[]} burguer The burguer to have it's price calculated
	 * @return {number} The price of the burguer
	 */
	getBurguerPrice(burguer: string[]): number {
		return burguer.reduce((value: number, ingredient: string) => {
			return value + IngredientTypesAndPrices[ingredient];
		}, 0);
	}

	/**
	 * Render
	 */
	render() {
		const { ingredients } = this.state,
			burguerPrice = this.getBurguerPrice(this.state.ingredients),
			readablePrice = burguerPrice.toFixed(2).replace('.', ',');

		return (
			<React.Fragment>
				<Burguer ingredients={ingredients}/>
				<p id="price">{`€ ${readablePrice}`}</p>
				<div id="controller">{this.renderIngredientControls()}</div>
				<button
					disabled={burguerPrice < 4}
					id="order"
					onClick={event => {
						let result = window.confirm(`Are you sure you wan't to order the burguer for € ${readablePrice}?`);

						if (!result) {
							return;
						}

						alert('Order placed!');

						this.setState({ingredients: []});
					}}
				>
					{burguerPrice < 4 ? 'The minimal price for a burguer is € 4,00': 'Order now!'}
				</button>
			</React.Fragment>
		);
	}
}

export default BurguerBuilder;