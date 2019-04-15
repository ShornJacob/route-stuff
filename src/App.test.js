import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import MyComponent from './MyComponent';
import Foo from './Foo';

//https://facebook.github.io/create-react-app/docs/running-tests


//smoke test” verifying that a component renders without throwing
it('renders without crashing', () => {

    //https://facebook.github.io/create-react-app/docs/running-tests#option-1-shallow-rendering
    //test components in isolation from the child components they render,
  shallow(<App />);
});

//enzyme documentation uses Chai and Sinon for assertions but you don’t have to use them because
// Jest provides built-in expect() and jest.fn() for spies.

//https://jestjs.io/docs/en/expect.html - jest matchers

it('testing element inside a component', () => {
    const wrapper = shallow(<Foo />);
    const child = <div>Foo</div>

    // expect(wrapper.contains(welcome)).toBe(true);
    expect(wrapper.contains(child)).toEqual(true);
  });

 // https://airbnb.io/enzyme/#shallow-rendering with Jest matchers
 //https://jestjs.io/docs/en/expect.html Jest matchers
  describe('<MyComponent />', () => {
    it('renders three <Foo /> components', () => {
      const wrapper = shallow(<MyComponent />);
      expect(wrapper.find(Foo)).toHaveLength(3);
    });

    it('simulates click events', () => {

        //https://jestjs.io/docs/en/jest-object#jestfnimplementation
        //Mock functions are also known as "spies", 
        //because they let you spy on the behavior of a function that is called indirectly by some other code,
        //https://jestjs.io/docs/en/mock-function-api
        
        const onButtonClick = jest.fn();
        const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
        wrapper.find('button').simulate('click');
        expect(onButtonClick).toHaveBeenCalled();
      });
});