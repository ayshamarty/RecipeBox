import React, { Component } from "react";
import axios from "axios";

class RecipeForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      ingredients: [],
      description: "",
      image: ""
    };
  }

  submitRecipe = e => {
    e.preventDefault();
    const newRecipe = {
      name: e.target[0].value,
      ingredients: e.target[1].value,
      description: e.target[2].value,
      image: e.target[3].value
    };

    let notifier = document.getElementById("notifier");

    axios
      .post("http://localhost:5000/recipe/createrecipe", newRecipe)
      .then(response => {
        this.props.getAll();
        notifier.innerText = "recipe added";
      })
      .catch(err => {
        notifier.innerText = "recipe not added";
      });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitRecipe}>
          <p>Recipe Name:</p>
          <input id="recipe-name" />
          <p>Ingredients:</p>
          <input id="recipe-ingredients" />
          <p>Description:</p>
          <input id="recipe-description" />
          <p>Image:</p>
          <input id="recipe-image" />
          <button type="submit">Submit</button>
        </form>
        <div>
          <span id="notifier" />
        </div>
      </div>
    );
  }
}

export default RecipeForm;
