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

  submitItem = e => {
    e.preventDefault();
    const newItem = {
      name: e.target[0].value,
      ingredients: e.target[1].value,
      description: e.target[2].value,
      image: e.target[3].value
    };

    axios.post("http://localhost:5000/recipe/createrecipe", newItem).then(response => {
      console.log(newItem);
      console.log(response);
      this.props.getAll();
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitItem}>
          <p>Recipe Name:</p>
          <input />
          <p>Ingredients:</p>
          <input />
          <p>Description:</p>
          <input />
          <p>Image:</p>
          <input />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RecipeForm;
