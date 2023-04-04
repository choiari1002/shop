import "./App.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from "react";
import Data from './Data.js';
import Detail from './Pages/Detail.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function App() {

  let [shoes] = useState(Data);
  let navigate =  useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={()=>{ navigate('/') }}>Solemate</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart') }}>Cart</Nav.Link>
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
        <Route path="/detail/:id" element={<>
          <Detail shoes={shoes}></Detail>
        </>}/>

        <Route path="/about" element={<About></About>}>
          <Route path="member" element={<>멤버임</>}/>
          <Route path="location" element={<>위치정보임</>}/>
        </Route>
        <Route path="/event" element={<Event></Event>}>
          <Route path="one" element={<>첫 주문시 양배추즙 서비스</>}/>
          <Route path="two" element={<>생일기념 쿠폰받기</>}/>
        </Route>
        <Route path="*" element={<>404 PAGE</>} />
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

function About() {
  return(
    <div>
      <h4>About</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
