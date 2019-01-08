// Resources
import 'commons/commons.scss';
import 'commons/reset.scss';

// Libs
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default class Layout extends React.PureComponent {

	render() {
		const {title, children, description} = this.props;
		const someDescription = description ? description : title;

		return (
			<div className="layout">
				<Head>
					<title>
						{title}
					</title>
					<meta charSet="utf-8"/>
					<meta name="Description" content={someDescription}/>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
						key="viewport"
					/>
				</Head>
				{children}
			</div>
		);
	};
}

Layout.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
	description: PropTypes.string,
};
