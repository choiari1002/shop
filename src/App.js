import "./App.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { createContext, useState } from "react";
import Data from './Data.js';
import Detail from './Pages/Detail.js';
import Cart from './Pages/Cart.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import axios from 'axios';

export let Context1 = createContext()

function App() {

  let [shoes, setShoes] = useState(Data);
  let [loading, setLoading] = useState(false);
  let [page, setPage] = useState(1);
  let [isLastPage, setIsLastPage] = useState(false);
  let [inventory] = useState([10,11,12])

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
          {
              loading == true ? <div className="alert alert-warning">Loading...</div> : null
          }
          <button onClick={()=>{
            setLoading(true)
            axios.get(`https://codingapple1.github.io/shop/data${page + 1}.json`)
            .then((response)=>{ console.log(response.data);
              if (response.data.length === 0) {
                setIsLastPage(true);
              } else {
                let copy = [...shoes, ...response.data];
                setShoes(copy);
                setPage(page + 1);
              }
              setLoading(false);})
            .catch(()=>{ console.log('error'); setLoading(false); })
            }}>More</button>
        </>}/>
        <Route path="/detail/:id" element={<Context1.Provider value={{ inventory }}><Detail shoes={shoes}></Detail></Context1.Provider>}/>
        <Route path="/cart" element={<Cart></Cart>} />
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
      <p>{ props.shoes[props.i].price }</p>
    </div>
  );
}

export default App;
