import React from "react";

import RecipeList from "./RecipeList";
import Recipe from "./Recipe";

function Browse () {


    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3 bg-primary">
            <RecipeList />
          </div>
          <div className="col-sm-1"/>
          <div className="col-sm-8 bg-info">
            <Recipe />
          </div>
        </div>
      </div>
    );
  }

export default Browse;
