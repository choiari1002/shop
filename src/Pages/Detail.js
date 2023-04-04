import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
    let [count, setCount] = useState(0)
    let [alert, setAlert] = useState(true)
    let [num, setNum] = useState('')

    useEffect(()=> {
        let a = setTimeout(()=> { setAlert(false) }, 2000)
        if (isNaN(num) == true){
            window.alert('그러지마세요')
          }

        return()=>{
            clearTimeout(a)
        }
    },[num])

    let {id} = useParams();
    let shoe = props.shoes.find(function(x){
        return x.id == id
      });

    return(
        <div className="container">
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
                <p>${shoe.price}</p>
                {/* <input className="me-3" onChange={(e)=>{ setNum(e.target.value)}}/> */}
                <button className="btn btn-danger">주문하기</button>
            </div>
            </div>
        </div>
    )
  }

  export default Detail;