import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api'; 

import { connect } from 'react-redux';

import { formatPrice } from '../../util/format';

import { ProductList } from './styles';

class Home extends Component {

  state = {
    products: [],
    itens: [],
  }

  async componentDidMount() {
    const  response  = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

      this.setState({
        products: data,
      })
  };

  handleAddToCart = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product, 
    })

    this.setState({
      itens: [...this.state.itens, product]
    })
  };

  render(){

    const { products, itens } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
          <img 
            src={product.image} 
            alt={product.title} 
          />
          <strong>
            {product.title}
          </strong>
          <small>A partir de</small>
          <span>{product.priceFormatted}</span>
  
          <button type="button" onClick={() => this.handleAddToCart(product)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" /> {itens.length}
            </div>
  
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
        ))};
      </ProductList>
    );
  }

}

export default connect()(Home);
