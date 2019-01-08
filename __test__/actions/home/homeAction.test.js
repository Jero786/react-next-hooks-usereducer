// Libs
import React from 'react';
import {expect} from 'chai';

// Actions
import {
	onScroll,
	onResize,
	onResizeMobile,
	onResizeDesktop,
	onResizeTablet,
	onClickSideBar,
	onStickyHeader,
	onUnStickyHeader
} from 'actions/home/homeActions';

describe('Home Actions', () => {

	it('onScroll should be properly structure', () => {
		expect(onScroll()).to.deep.equals({type: 'SCROLL'});
	});

	it('onResize properly structure', () => {
		expect(onResize()).to.deep.equals({type: 'RESIZE'});
	});

	it('onResizeMobile properly structure', () => {
		expect(onResizeMobile()).to.deep.equals({type: 'SCREEN_IS_MOBILE'});
	});

	it('onResizeDesktop properly structure', () => {
		expect(onResizeDesktop()).to.deep.equals({type: 'SCREEN_IS_DESKTOP'});
	});

	it('onResizeTablet properly structure', () => {
		expect(onResizeTablet()).to.deep.equals({type: 'SCREEN_IS_TABLET'});
	});

	it('onClickSideBar properly structure', () => {
		expect(onClickSideBar(2)).to.deep.equals({type: 'SIDEBAR_CLICKED', index: 2});
	});

	it('onStickyHeader properly structure', () => {
		expect(onStickyHeader(2)).to.deep.equals({type: 'IS_STICKY_HEADER'});
	});

	it('onUnStickyHeader properly structure', () => {
		expect(onUnStickyHeader(2)).to.deep.equals({type: 'IS_UNSTICKY_HEADER'});
	});

});
