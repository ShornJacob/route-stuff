import React from 'react';
import { mount } from 'enzyme';
import Foo from './Foo'

//https://airbnb.io/enzyme/#full-dom-rendering
//Full DOM examples

//expect gives you access to a number of "matchers" that let you validate different things.

describe('<Foo />', () => {
    it('allows us to set props', () => {
        const wrapper = mount(<Foo bar="baz" />);
        expect(wrapper.props().bar).toEqual('baz');

        wrapper.setProps({ bar: 'foo' });
        expect(wrapper.props().bar).toEqual('foo');
    })
})