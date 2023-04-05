import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap'

import { Context1 } from './../App.js'

function Detail(props) {

    let {inventory} = useContext(Context1)

    let [count, setCount] = useState(0)
    let [alert, setAlert] = useState(true)
    let [tab, setTab] = useState(0)
    let [fade, setFade] = useState('')

    useEffect(()=> {
        let a = setTimeout(()=> { setAlert(false) }, 2000)
        setFade('end')

        return()=>{
            clearTimeout(a)
            setFade('')
        }
    },[])

    let {id} = useParams();
    let shoe = props.shoes.find(function(x){
        return x.id == id
      });

    return(
        <div className={'container start ' + fade}>
            {
                alert == true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+ ( Number(id) + 1 )+".jpg"} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{shoe.title}</h4>
                    <p>{shoe.content}</p>
                    <p>{shoe.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>Detail</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>Review</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>Q&A</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab}></TabContent>
        </div>
    )
  }

  function TabContent({tab}) {

    let [fadeDetail, setFadeDetail] = useState('')
    let {inventory} = useContext(Context1)

    useEffect(()=>{
        setTimeout(()=>{ setFadeDetail('end') },100)

        return()=>{
            setFadeDetail('')
        }
    }, [tab])

    return (<div className={'start ' + fadeDetail}>
        {[
        <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div>,
        <div>Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>,
        <div>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</div>
        ][tab]}
    </div>)
  }

  export default Detail;