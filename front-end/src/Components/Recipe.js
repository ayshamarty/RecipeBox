import React from "react";

import { Button, Row, Col } from "reactstrap";

function Recipe(props) {
  if (
    props.recipes === undefined ||
    props.recipes.length === 0 ||
    props.recipeID.length === 0
  ) {
    return null;
  }

  let detailedRecipe = "";

  props.recipes.forEach(recipe => {
    if (recipe._id === props.recipeID) {
      detailedRecipe = recipe;
      console.log(recipe);
    }
  }, this);

  return (
    <div className="container">
      <Row>
        <div className="col-sm-3">
          <Col text-align="center">
            <h1>{detailedRecipe.name}</h1>
          </Col>
        </div>
      </Row>
      <Row>
        <div className="col-sm-3">
          <Col text-align="center">
            <img
              alt={detailedRecipe.name}
              src={detailedRecipe.image}
              maxwidth="10"
            />
          </Col>
        </div>
      </Row>
      <Row>
        <div className="col-sm-3">
          <Col text-align="center">
            <h2>Ingredients:</h2>
            <h4>{detailedRecipe.ingredients}</h4>
          </Col>
        </div>
      </Row>
      <Row>
        <div className="col-sm-3">
          <Col text-align="center">
            <h2>Method:</h2>
            <h4>{detailedRecipe.description}</h4>
          </Col>
        </div>
      </Row>
      <p type="text" value={detailedRecipe.name} />
      <Button onClick={props.deleteItem}>delete</Button>
      <Button>update</Button>
    </div>
  );
}

export default Recipe;
