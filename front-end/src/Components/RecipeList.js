import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RecipeIndex from "./RecipeIndex";

function RecipeList(props) {


  return (
    <div className="container">

        <ListGroup>
          <ListGroup.Item variant="info">
            Recipes
          </ListGroup.Item>
          {props.data.map((recipe, index) => (
            <RecipeIndex getAll={props.getAll} recipe={recipe} getID={props.getID} key={index}/>
          ))}
        </ListGroup>
    </div>
  );
}

export default RecipeList;
