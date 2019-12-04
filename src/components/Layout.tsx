import React from 'react';
import './Layout.css';

interface Props {
	children?: any;
}

interface State {};

class Layout extends React.Component<Props, State> {
	render() {
		return (
			<React.Fragment>
				<header>
					<img src="/%PUBLIC_URL%/Burger_logo_300.png" alt="logo"/>
					<nav>
						<p>Builder</p>
					</nav>
				</header>
				<main>{this.props.children}</main>
			</React.Fragment>
		);
	}
}

export default Layout;