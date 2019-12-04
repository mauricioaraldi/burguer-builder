import React from 'react';
import './Burguer.css';
import { IngredientTypes } from '../enums/IngredientTypes';

interface Props {
	ingredients?: Array<string>;
}

interface State {};

class Burguer extends React.Component<Props, State> {
	render() {
		if (!this.props.ingredients) {
			return null;
		}

		return this.props.ingredients.map((ingredient, index) => (
			<div key={index}>{ingredient}</div>
		));
	}
}

export default Burguer;