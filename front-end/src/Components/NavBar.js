import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css'

import Create from './Create';
import Browse from './Browse';

import {
    Navbar,
    Button
} from 'reactstrap';


function NavBar() {

    return (
        <div>
            <Router>
                <Navbar color="dark" light expand="md">
                    <Button>
                        <Link className="link" to="/">Home</Link>
                    </Button>
                    <Button>
                        <Link className="link" to="/create">Create</Link>
                    </Button>
                    <Button>
                        <Link className="link" to="/browse">Browse Recipes</Link>
                    </Button>
                </Navbar>
                <br/>

                <Route exact path="/"/>
                <Route path="/browse" component={Browse} />
                <Route path="/create" component={Create} />


            </Router>
        </div>
    )
}


export default NavBar;