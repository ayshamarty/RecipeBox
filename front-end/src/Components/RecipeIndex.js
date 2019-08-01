import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "reactstrap";
import axios from "axios";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import Recipe from "./Recipe";

function RecipeIndex(props) {
  //   let getOne = () => {
  //     let itemToShow = {
  //       name: props.data.name
  //     };
  //     axios.get("http://localhost:5000/recipe/name", {data: itemToShow}).then(response => {
  //       this.setState({
  //         recipes: response.data
  //       });
  //     });
  //   };

  return (
    <div>
      <ListGroup.Item
        action
        onClick={() => {
          props.getID(props.recipe._id);
        }}
      >
        {props.recipe.name}
      </ListGroup.Item>
    </div>
  );
}

export default RecipeIndex;
