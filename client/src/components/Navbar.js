import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Favourites from './Favourites';
//import axios from 'axios';

const NavBar = () => {
    return (
        <div>
        
        <Router>
            <Container>
                <Navbar className="nav" expand="lg" variant="light" bg="light" >
                    <Navbar.Brand className="home"><Link to="/">Home</Link></Navbar.Brand>
                    <Navbar.Brand className="favourites"><Link to="/Favourites">Favourites</Link></Navbar.Brand>
                </Navbar>
            </Container>

        <Switch>
            <Route exact={true} path="/" />
            <Route path="/Favourites" render={() => <Favourites />} />
        </Switch>
        </Router>
    </div>
    );
}

export default NavBar;
