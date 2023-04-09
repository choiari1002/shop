import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, increase } from './../store/userSlice.js'
import { addCount } from '../store.js'
import { memo, useState } from 'react'

let Child = memo( function() {
    return <div>child</div>
})

function Cart() {

    let state = useSelector((state)=>{return state})
    let dispatch = useDispatch()
    let [count, setCount] = useState(0);

    return(
        <div>
            <Child></Child>
            <button onClick={()=>setCount(count+1)}>+</button>
            {state.user.name} {state.user.age}의 장바구니
            <button onClick={()=>{dispatch(increase(100))}}>버튼</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a,i)=>{
                            return <tr key={i}>
                                        <td>{state.cart[i].id}</td>
                                        <td>{ state.cart[i].name }</td>
                                        <td>{ state.cart[i].count }</td>
                                        <td>
                                            <button onClick={()=>{dispatch(addCount(state.cart[i].id))}}>+</button>
                                        </td>
                                    </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;