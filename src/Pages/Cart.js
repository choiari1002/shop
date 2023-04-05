import { Table } from 'react-bootstrap'

function Cart() {
    return(
        <div>
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
                    <tr>
                        <td>1</td>
                        <td>item1</td>
                        <td>1</td>
                        <td>test</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;