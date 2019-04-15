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

    it('simulates click events', () => { 
        const spy = jest.fn();
        const wrapper = mount(<Foo onButtonClick={spy} />);
        wrapper.find('button').simulate('click');
        expect(spy).toHaveBeenCalled();
      });

      it('calls componentDidMount', () => {

        //https://jestjs.io/docs/en/jest-object.html#jestspyonobject-methodname
        // only React.Component has lifecycle, not functional stateless components
        // lifecle methods have to be defined

        const spy = jest.spyOn(Foo.prototype,'componentDidMount');
        const wrapper = mount(<Foo />);
        expect(spy).toHaveBeenCalled();

        //https://jestjs.io/docs/en/mock-function-api#mockfnmockclear
        //Resets all informataion in mock
        spy.mockClear()
    
      });
})