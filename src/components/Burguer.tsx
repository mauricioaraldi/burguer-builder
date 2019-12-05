import React from 'react';
import './Burguer.css';

interface Props {
	ingredients?: string[];
}

interface State {};

/**
 * Class that builds and renders the burguer element (with ingredients)
 *
 * @class
 */
class Burguer extends React.Component<Props, State> {
	/**
	 * Render burguer ingredients elements
	 *
	 * @author mauricio.araldi
	 * @since 0.1.0
	 * 
	 * @param {string[]} ingredients The ingredients to be rendered
	 * @return {Element[]} The elements to be displayed on web page
	 */
	renderIngredients(ingredients: string[]) {
		return ingredients.map((ingredient, index) => (
			<div key={index} className={ingredient.toLowerCase()}>
				{ingredient.slice(0, 1).concat(ingredient.slice(1).toLowerCase())}
			</div>
		));
	}

	/**
	 * Render
	 */
	render() {
		const { ingredients } = this.props;

		if (!ingredients || !ingredients.length) {
			return <p id="burguer">Please, add some ingredients!</p>;
		}

		return <div id="burguer">{this.renderIngredients(ingredients)}</div>
	}
}

export default Burguer;