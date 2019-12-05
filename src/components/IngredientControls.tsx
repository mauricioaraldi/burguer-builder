import React from 'react';

interface Props {
	addAction: Function,
	addDisabled?: boolean,
	name: string,
	quantity: number,
	removeAction: Function
	removeDisabled?: boolean
}

interface State {};

/**
 * Class that render the controls to add and remove an ingredient
 *
 * @class
 */
class IngredientControls extends React.Component<Props, State> {
	/**
	 * Render
	 */
	render() {
		const { addAction, addDisabled, name, quantity,
			removeAction, removeDisabled } = this.props;

		return (
			<React.Fragment>
				<span>{name}</span>
				<span>{quantity}</span>
				<button onClick={() => addAction()} disabled={addDisabled}>Add</button>
				<button onClick={() => removeAction()} disabled={removeDisabled}>Remove</button>
			</React.Fragment>
		)
	}
}

export default IngredientControls;