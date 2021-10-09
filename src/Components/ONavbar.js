import React from 'react';
import '../App.css'
import { Navbar, Container, Nav, Button}  from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import OHome from './Home';
import OCreate from './Create';
import OButton from './Button';
import logo from '../images/share.png'


function ONavbar() {
  return (
    <div>
      <Router>
      <div>
      <Navbar bg="light" expand="lg">
          <Container>
          <Navbar.Brand>
          <img src={logo} width="30" height="30"className="App-logo" alt="logo" /> 
           Ozi V1</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/">Home</Link>
          </Nav>
          <Link to="/create">Create</Link>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <OButton /> 
          </Navbar.Text>
          </Navbar.Collapse>
          </Container>
      </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <OHome />
          </Route>
          <Route path="/create">
            <OCreate />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default ONavbar;
