import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../App';
import NavBar from '../Components/NavBar'

Enzyme.configure({ adapter: new Adapter()})



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders shallow without crashing', () => {
  shallow(<App />);
})

it('renders navbar', () => {
  const wrapper = shallow(<App />);
  const content = <NavBar />
  expect(wrapper.contains(content)).toEqual(true);
})
