// Libs
import {fromJS} from 'immutable';

// Constants
import {
	SIDEBAR_CLICKED,
	SCREEN_IS_MOBILE,
	SCREEN_IS_TABLET,
	SCREEN_IS_DESKTOP,
	IS_STICKY_HEADER,
	IS_UNSTICKY_HEADER
} from 'constants/ActionTypes';

export const homeInitialState = fromJS({
	sidebarItems: [
		{displayText: 'home 1', link: '/about'},
		{displayText: 'home 2', link: '/about1'},
		{displayText: 'home 3', link: '/about2'},
		{displayText: 'home 4', link: '/about3'},
	],

	sidebarItemActiveIndex: 0
});

export default function (state = homeInitialState, action) {
	switch (action.type) {

		case SIDEBAR_CLICKED: {
			return state.merge({
				sidebarItemActiveIndex: action.index
			});
		}

		case SCREEN_IS_MOBILE: {
			return state.merge({
				isMobile: true,
				isTablet: false,
				isDesktop: false
			});
		}

		case SCREEN_IS_TABLET: {
			return state.merge({
				isMobile: false,
				isTablet: true,
				isDesktop: false
			});
		}

		case SCREEN_IS_DESKTOP: {
			return state.merge({
				isMobile: false,
				isTablet: false,
				isDesktop: true
			});
		}

		case IS_STICKY_HEADER: {
			return state.merge({
				isStickyHeader: true
			})
		}

		case IS_UNSTICKY_HEADER: {
			return state.merge({
				isStickyHeader: false
			})
		}
	}
};
