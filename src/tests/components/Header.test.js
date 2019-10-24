import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let wrapper, startLogoutFn;

beforeEach(() => {
    startLogoutFn = jest.fn();
    wrapper = wrapper = shallow(<Header startLogout={startLogoutFn} />);
});

test('should render header correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout when clicking logout button', () => {
    wrapper.find('button').simulate('click');
    expect(startLogoutFn).toHaveBeenCalled();
});
