import React from 'react';
import Layout from './components/Layout';
import BurguerBuilder from './containers/BurguerBuilder';

/**
 * Main app class
 *
 * @class
 */
class App extends React.Component {
	/**
	 * Render
	 */
	render() {
		return (
			<Layout>
				<BurguerBuilder/>
			</Layout>
		);	
	}
}

export default App;