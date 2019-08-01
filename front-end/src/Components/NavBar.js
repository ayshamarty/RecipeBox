import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

import RecipeForm from "./RecipeForm";
import Recipe from "./Recipe";
import RecipeList from "./RecipeList";

import { Navbar, Button } from "reactstrap";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      recipeID: ""
    };
  }

  getID = (linkID) => {
    this.setState({
      recipeID: linkID
    });
    console.log(this.state.recipeID);
  };

  getAll = () => {
    axios.get("http://localhost:5000/recipe/all").then(response => {
      this.setState({
        recipes: response.data
      });
    });
  };

  deleteItem = () => {
    let itemToDelete = {
      _id: this.state.recipeID
    };
    axios
      .delete("http://localhost:5000/recipe/deleteRecipe", {
        data: itemToDelete
      })
      .then(res => {
        console.log(res);
        this.getAll();
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAll();
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar color="dark" light expand="md">
            <Button id="home-button">
              <Link className="link" to="/">
                Home
              </Link>
            </Button>
            <Button id="create-button">
              <Link className="link" to="/create">
                Create
              </Link>
            </Button>
            <Button id="browse-button" className="jkadf">
              <Link className="link" to="/browse">
                Browse Recipes
              </Link>
            </Button>
          </Navbar>
          <br />

          <Route exact path="/" />
          <Route path="/create" component={() =><RecipeForm getAll={this.getAll}/>} />
          <Route
            path="/browse"
            render={props => (
              <div className="container">
                <div className="row">
                  <div className="col-sm-3 bg-info">
                    <RecipeList
                      data={this.state.recipes}
                      getAll={this.getAll}
                      getID={this.getID}
                      recipeID={this.recipeID}
                    />
                  </div>
                  <div className="col-sm-1" />
                  <div className="col-sm-8 bg-info">
                    <Recipe
                      recipeID={this.state.recipeID}
                      recipes={this.state.recipes}
                      deleteItem={this.deleteItem}
                    />
                  </div>
                </div>
              </div>
            )}
          />
        </Router>
      </div>
    );
  }
}

NavBar.displayname = "MyNavBar";

export default NavBar;
