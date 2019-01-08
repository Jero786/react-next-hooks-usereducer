// Resources
import './Sidebar.scss';
// Libs
import React, {memo} from 'react';
import PropTypes from 'prop-types';

// Actions
import {onClickSideBar} from 'actions/home/homeActions';

const SideBar = ({children, dispatch}) => {
	const onClick = (evt) => {
		const sideBarItem = +evt.target.getAttribute('data-index');
		dispatch(onClickSideBar(sideBarItem));
	};
	return (
		<ul onClick={onClick} className="side-bar">
			{children}
		</ul>
	);
};

SideBar.propTypes = {
	children: PropTypes.node,
	dispatch: PropTypes.func,
};

export default memo(SideBar);
