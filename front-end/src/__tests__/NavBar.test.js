import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavBar from "../Components/NavBar";

import Recipe from "../Components/Recipe";
import RecipeList from "../Components/RecipeList";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders shallow without crashing", () => {
  shallow(<NavBar />);
});

// it("renders Recipe area", () => {
//   const wrapper = mount(<NavBar />);
//   wrapper.find({ className: "jkadf" }).simulate("click");
//   const content = <p>hello</p>;
//   console.log(wrapper);
//   console.log(wrapper.find({ className: "jkadf" }));
//   expect(wrapper.contains(content)).toBeTruthy();
// });

// it('renders Recipe area', () => {
//   const wrapper = mount(<NavBar />);
//     wrapper.find('#browse-button').simulate('click')
//   const content = <RecipeList />
//   expect(wrapper.contains(content)).toEqual(true);
// })
