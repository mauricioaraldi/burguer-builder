import React from 'react';
import Layout from './components/Layout';
import BurguerBuilder from './containers/BurguerBuilder';
import Checkout from './containers/Checkout';
import { Route, Switch } from 'react-router-dom';
import { BurguerContextProvider } from './context/BurguerContext';

interface Props {}

interface State {
	burguer: string[]
};

/**
 * Main app class
 *
 * @class
 */
class App extends React.Component<Props, State> {
	/**
	 * Constructor
	 */
	constructor(props: Props) {
		super(props);
		this.state = {burguer: []};
	}

	/**
	 * Render
	 */
	render() {
		const { burguer } = this.state;

		return (
			<BurguerContextProvider
				value={{
					burguer: this.state.burguer,
					setBurguer: (data: string[]) => {
						if (JSON.stringify(data) !== JSON.stringify(burguer)) {
							this.setState({burguer: data});
						}
					}
				}}
			>
				<Layout>
					<Switch>
						<Route path="/checkout" component={Checkout}/>
						<Route path="/" component={BurguerBuilder}/>
					</Switch>
				</Layout>
			</BurguerContextProvider>
		);	
	}
}

export default App;