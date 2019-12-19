import React from 'react';
import {  shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import App from './App';
test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  const toDo = wrapper.find("ToDo");
  expect(toDo).toHaveLength(1);
});
