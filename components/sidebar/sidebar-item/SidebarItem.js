// Resources
import './SidebarItem.scss';

// Libs
import React, {memo} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function SideBarItem({icon, text, itemIndex, isActive, link = '/'}) {

	return (
		<li
			className={classNames('side-bar-item', {'is-active': isActive})}
			data-index={itemIndex}
			data-link={link}
		>
			<span className={`side-bar-item__icon ${icon}`}
						data-index={itemIndex}
						data-link={link}
			/>
			<span className="side-bar-item__text"
						data-index={itemIndex}
						data-link={link}
			>{text}</span>
		</li>
	);
}

SideBarItem.propTypes = {
	icon: PropTypes.string,
	text: PropTypes.string,
	itemIndex: PropTypes.number,
	link: PropTypes.string,
	isActive: PropTypes.bool,
};

export default memo(SideBarItem);
