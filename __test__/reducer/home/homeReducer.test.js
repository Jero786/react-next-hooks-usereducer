// Libs
import React from 'react';
import {expect} from 'chai';
import {fromJS} from 'immutable';

// Components
import homeReducer from 'reducers/home/homeReducer';

// Actions
import {
	onClickSideBar,
	onResizeMobile,
	onResizeDesktop,
	onResizeTablet,
	onStickyHeader,
	onUnStickyHeader
} from 'actions/home/homeActions';

describe('homeReducer', () => {

	it('should calculate click sidebar state properly', () => {
		const result = homeReducer(fromJS({}), onClickSideBar(2));

		expect(result.get('sidebarItemActiveIndex')).to.equal(2);
	});

	it('should calculate resize desktop state properly', () => {
		const result = homeReducer(fromJS({}), onResizeDesktop());

		expect(result.get('isMobile')).to.be.false;
		expect(result.get('isTablet')).to.be.false;
		expect(result.get('isDesktop')).to.be.true;
	});

	it('should calculate resize mobile state properly', () => {
		const result = homeReducer(fromJS({}), onResizeMobile());

		expect(result.get('isMobile')).to.be.true;
		expect(result.get('isTablet')).to.be.false;
		expect(result.get('isDesktop')).to.be.false;
	});

	it('should calculate resize tablet state properly', () => {
		const result = homeReducer(fromJS({}), onResizeTablet());

		expect(result.get('isMobile')).to.be.false;
		expect(result.get('isTablet')).to.be.true;
		expect(result.get('isDesktop')).to.be.false;
	});

	it('should calculate sticky state properly', () => {
		const result = homeReducer(fromJS({}), onStickyHeader());

		expect(result.get('isStickyHeader')).to.be.true;
	});

	it('should calculate sticky state properly', () => {
		const result = homeReducer(fromJS({}), onUnStickyHeader());

		expect(result.get('isStickyHeader')).to.be.false;
	});

});
