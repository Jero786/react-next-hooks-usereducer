// Libs
import {useEffect} from 'react';
import debunce from 'lodash/debounce';

// Resources
import {
	SCREEN_IS_MOBILE,
	SCREEN_IS_TABLET,
	SCREEN_IS_DESKTOP
} from 'constants/ActionTypes';
import {
	MOBILE_MAX_WIDTH,
	TABLET_MAX_WIDTH
} from 'constants';

// Actions
import {
	onStickyHeader,
	onUnStickyHeader,
} from 'actions/home/homeActions';

/**
 * Effect to handler a scroll event.
 */
export function useScrollWindow(dispatch) {
	useEffect(() => {
		const onScrollWithDispatch = onScroll.bind(dispatch);
		window.addEventListener('scroll', onScrollWithDispatch );
		return () => {
			window.removeEventListener('scroll', onScrollWithDispatch);
		}
	});
}

/**
 * Effect to handler a windows resize event.
 * @param dispatch
 */
export function useResizeWindow(dispatch) {
	const onResizeDebounced = debunce(onResize.bind(dispatch), 500);
	useEffect(() => {
		window.addEventListener('resize', onResizeDebounced);
		return () => {
			window.removeEventListener('resize', onResizeDebounced);
		}
	});
}

/**
 * Handler in a imperative way the sticky/non-sticky header.
 */
function onScroll() {
	const dispatch = this;
	const headerEl = document.querySelector('.layout');
	if (window.pageYOffset !== undefined && window.pageYOffset > headerEl.offsetTop) {
		headerEl.classList.add('is-sticky');
		dispatch(onStickyHeader())
	} else {
		headerEl.classList.remove('is-sticky');
		dispatch(onUnStickyHeader())
	}
}

/**
 * Dispatch the proper resize action.
 */
function onResize() {
	const dispatch = this;
	dispatch(getResizeAction());
}

export const getResizeAction = () => {
	let type;
	const screenWidth = window.screen && window.innerWidth || 0;

	if (screenWidth <= MOBILE_MAX_WIDTH) {
		type = SCREEN_IS_MOBILE
	} else if (screenWidth > TABLET_MAX_WIDTH) {
		type = SCREEN_IS_DESKTOP
	} else {
		type = SCREEN_IS_TABLET;
	}

	return {
		type
	}
};
