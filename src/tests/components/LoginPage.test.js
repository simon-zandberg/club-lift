import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let wrapper, startLoginFn;

beforeEach(() => {
    startLoginFn = jest.fn();
    wrapper = shallow(<LoginPage startLogin={startLoginFn} />);
});

test('should render login page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin when clicking login button', () => {
    wrapper.find('button').simulate('click');
    expect(startLoginFn).toHaveBeenCalled();
});
