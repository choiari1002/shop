import "./App.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from "react";
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Solemate</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            {/* <Link to='/'>홈</Link>
            <Link to='/detail'>상세페이지</Link> */}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<>
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
        </>}/>
        <Route path="/detail" element={<>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
              </div>
              <div className="col-md-6">
                <h4 className="pt-5">상품명</h4>
                <p>상품설명</p>
                <p>120000원</p>
                <button className="btn btn-danger">주문하기</button>
              </div>
            </div>
          </div>
        </>}/>
      </Routes>
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
