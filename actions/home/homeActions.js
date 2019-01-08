// Constants
import {
	SCROLL,
	RESIZE,
	SIDEBAR_CLICKED,
	SCREEN_IS_MOBILE,
	SCREEN_IS_DESKTOP,
	SCREEN_IS_TABLET,
	IS_STICKY_HEADER,
	IS_UNSTICKY_HEADER,
} from 'constants/ActionTypes';

export const onScroll = () => ({type: SCROLL});
export const onResize = () => ({type: RESIZE});
export const onResizeMobile = () => ({type: SCREEN_IS_MOBILE});
export const onResizeDesktop = () => ({type: SCREEN_IS_DESKTOP});
export const onResizeTablet = () => ({type: SCREEN_IS_TABLET});
export const onClickSideBar = (index) => ({type: SIDEBAR_CLICKED, index});
export const onStickyHeader = () => ({type: IS_STICKY_HEADER});
export const onUnStickyHeader = () => ({type: IS_UNSTICKY_HEADER});
