import React from 'react';

import { connect } from 'react-redux';

import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart({ itens, dispatch }){
    return(
        <Container>
            <ProductTable>
                <thead>
                <tr>
                    <th />
                    <th>PRODUTO</th>
                    <th>QTD</th>
                    <th>SUBTOTAL</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                { itens.map(item => (
                    <tr key={item.id}>
                        <td>
                            <img 
                                src={item.image} 
                                alt={item.title}
                            />
                        </td>
                        <td>
                            <strong>{item.title}</strong>
                            <span>{item.priceFormatted}</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                                </button>

                                <input type="number" readOnly value={item.amount} />
                                
                                <button type="button">
                                    <MdAddCircleOutline size={20} color="#7159c1" />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$258,80</strong>
                        </td>
                        <td>
                            <button type="button" onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}>
                                <MdDelete size={20} color="#7519c1"/>
                            </button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar o pedido</button>

                <Total>
                    <span>Total</span>
                    <strong>R$2099,00</strong>
                </Total>
            </footer>
        </Container>
    )
};

export default connect(state => ({
    itens: state.cart
}))(Cart);