import IngredientTypesAndPrices from './IngredientTypesAndPrices';

/**
 * Class that offers some utilities for burguers
 *
 * @class
 */
class BurguerUtils {
	/**
	 * Gets the price of the burguer, based on ingredients
	 *
	 * @author mauricio.araldi
	 * @since 0.2.0
	 * 
	 * @param {string[]} burguer The burguer to have it's price calculated
	 * @return {number} The price of the burguer
	 */
	static getBurguerPrice(burguer: string[]): number {
		return burguer.reduce((value: number, ingredient: string) => {
			return value + IngredientTypesAndPrices[ingredient];
		}, 0);
	}

	/**
	 * Checks how many of that ingredient exists in the burguer
	 *
	 * @author mauricio.araldi
	 * @since 0.2.0
	 *
	 * @param {string[]} burguer The burguer to check
	 * @param {string} ingredient The ingredient to be counted
	 * @return {number} The amount of that ingredient type in the burguer
	 */
	static countIngredient(burguer: string[], ingredient: string): number {
		return burguer.reduce((quantity: number, curIngredient: string) => {
			return quantity += curIngredient === ingredient ? 1 : 0;
		}, 0);
	}
}

export default BurguerUtils;