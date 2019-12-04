import React from 'react';
import Burguer from '../components/Burguer';
import { IngredientTypes } from '../enums/IngredientTypes';

interface Props {}

interface State {};

class BurguerBuilder extends React.Component<Props, State> {
	render() {
		return (
			<React.Fragment>
				<Burguer ingredients={[
					IngredientTypes.BREAD,
					IngredientTypes.MEAT,
					IngredientTypes.CHEESE,
					IngredientTypes.BREAD
				]}/>
			</React.Fragment>
		);
	}
}

export default BurguerBuilder;