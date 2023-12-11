import React, { useContext } from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function Cart() {
    const { cartItems, isCartVisible } = useContext(AppContext);

    const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

    return (
        <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
            <div className="cart-items">
                { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />) }
            </div>

            <div className="cart-resume">
                {formatCurrency(totalPrice, 'BRL')}
            </div>
            <div className="type-payment">
                <p>Tipo de pagamento</p>
                <select className="payment">
                    <option value="pix">Pix</option>
                    <option value="cartao">Cartão</option>
                    <option value="dinheiro">Dinheiro</option>
                </select>
            </div>
            <a href="https://wa.me/+5514997515149/?text=AA">
                <button className='endpurchase' type='button'>Finalizar compra</button>
            </a>
        </section>
    );
}

export default Cart;
