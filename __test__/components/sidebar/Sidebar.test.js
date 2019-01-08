import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import SideBar from 'components/sidebar/Sidebar';
import SideBarItem from 'components/sidebar/sidebar-item/SidebarItem';

describe('SideBar', () => {

    it('should exist', () => {
        expect((
          <SideBar>
            <SideBarItem />
            <SideBarItem />
          </SideBar>
        )).to.exist;
    });

    it('should show properly amount of children', function () {
        const wrapper = render((
          <SideBar>
            <SideBarItem />
            <SideBarItem />
          </SideBar>
        ));

        expect(wrapper.children().length).to.equal(2);
    });

    it('should show properly text of item', function () {
        const wrapper = render((
          <SideBar>
            <SideBarItem text="item 1" />
            <SideBarItem />
          </SideBar>
    ));

        expect(wrapper.find('.side-bar-item__text').text()).to.equal('item 1');
    });

    it('should show active properly the item defined', function () {
        const wrapper = render(
          <SideBar>
            <SideBarItem text="item 1" isActive />
          </SideBar>
    );

        expect(wrapper.find('.side-bar-item').first().hasClass('is-active')).to.be.true;

    });

});
