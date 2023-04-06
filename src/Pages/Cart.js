import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../store.js'

function Cart() {

    let state = useSelector((state)=>{return state})
    let dispatch = useDispatch()

    return(
        <div>
            {state.user}의 장바구니
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
                                            <button onClick={()=>{dispatch(changeName())}}>+</button>
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