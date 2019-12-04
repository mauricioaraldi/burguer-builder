import React from 'react';
import Layout from './components/Layout';
import BurguerBuilder from './containers/BurguerBuilder';

class App extends React.Component {
	render() {
		return (
			<Layout>
				<BurguerBuilder/>
			</Layout>
		);	
	}
}

export default App;