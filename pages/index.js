// Libs
import React, {useReducer} from 'react';

// Components
import Layout from 'components/layout/Layout';
import SideBar from 'components/sidebar/Sidebar';
import SideBarItem from 'components/sidebar/sidebar-item/SidebarItem';

// Resources
import {useScrollWindow, useResizeWindow} from 'effects/windowEffects';
import homeReducer, {homeInitialState} from 'reducers/home/homeReducer';

function App() {

	// Effects
	const [homeState, dispatch] = useReducer(homeReducer, homeInitialState);
	useScrollWindow(dispatch);
	useResizeWindow(dispatch);

	return (
		<Layout
			homeState={homeState}
			title="React Hooks"
		>
			<SideBar activeInde={homeState.get('activeItem')} dispatch={dispatch}>
				{
					homeState.get('sidebarItems').map(
						(
							sideBarItem, index) =>
							<SideBarItem
								isActive={index === homeState.get('sidebarItemActiveIndex')}
								itemIndex={index}
								key={`key-${sideBarItem.get('link')}`}
								text={sideBarItem.get('displayText')}
							/>
					)
				}
			</SideBar>
		</Layout>
	);
}

App.propTypes = {};
App.defaultProps = {};

export default App;
