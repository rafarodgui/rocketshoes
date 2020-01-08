import React from 'react';

import { connect } from 'react-redux';

import { formatPrice } from '../../util/format';

import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart({ itens }){

    const data = itens.map( item => ({
        ...item,
        price: formatPrice(item.price)
    }));

    return(
        <Container>
            <ProductTable>
                {
                    data.map(item => (
                        <>
                            <thead key={item.id}>
                            <tr>
                                <th />
                                <th>PRODUTO</th>
                                <th>QTD</th>
                                <th>SUBTOTAL</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img 
                                        src={item.image} 
                                        alt={item.title}
                                    />
                                </td>
                                <td>
                                    <strong>{item.title}</strong>
                                    <span>{item.price}</span>
                                </td>
                                <td>
                                    <div>
                                        <button type="button">
                                            <MdRemoveCircleOutline size={20} color="#7159c1" />
                                        </button>

                                        <input type="number" readOnly value={1} />
                                        
                                        <button type="button">
                                            <MdAddCircleOutline size={20} color="#7159c1" />
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <strong>R$258,80</strong>
                                </td>
                                <td>
                                    <button type="button">
                                        <MdDelete size={20} color="#7519c1"/>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </>
                    ))
                }
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