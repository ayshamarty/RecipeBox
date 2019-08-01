import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import RecipeForm from "../Components/RecipeForm";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RecipeForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders shallow without crashing", () => {
  shallow(<RecipeForm />);
});

// it("submit a form", () => {
//   const wrapper = mount(<RecipeForm />);

//   wrapper.find('[id="recipe-name"]').instance().value="my recipe";
//   wrapper.find('[id="recipe-ingredients"]').instance().value="some ingredients";
//   wrapper.find('[id="recipe-ingredients"]').instance().value="some ingredients";
//   wrapper.find("form").simulate("submit");

//   expect(wrapper.contains(<span id="notifier">recipe added</span>)).toBeTruthy();

// });
