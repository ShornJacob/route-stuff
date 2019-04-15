import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

//smoke test” verifying that a component renders without throwing
it('renders without crashing', () => {

    //https://facebook.github.io/create-react-app/docs/running-tests#option-1-shallow-rendering
    //test components in isolation from the child components they render,
  shallow(<App />);
});