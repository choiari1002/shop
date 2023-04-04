import "./App.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from "react";
import data from './data.js';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Solemate</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-image"></div>

      <div className="container">
        <div className="row">
          {
            shoes.map(function(a,i){
              return(
                <Card shoes={shoes} i={i}></Card>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return(
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes"+ (props.i+1) + ".jpg"} width="80%"/>
      <h4>{ props.shoes[props.i].title }</h4>
      <p>${ props.shoes[props.i].price }</p>
    </div>
  );
}

export default App;
