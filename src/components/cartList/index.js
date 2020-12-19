/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import './style.css';

const CartList = (props) => {
  const { cart, calc } = props;
  const [qty, setQty] = useState(cart.purchased_stock);
  const onQty = (params) => {
    if (params) {
      if (qty > 1) {
        setQty(qty - 1);
        calc(-cart.cart[0].price);
      }
    } else if (qty < 10) {
      setQty(qty + 1);
      calc(cart.cart[0].price);
    }
  };

  return (
    <>
      <div className="w-100 mb-3" key={cart._id}>
        <div className="cartList">
          <img
            src={cart.cart[0].images.url}
            width="136"
            height="136"
            alt="product images"
          />
          <div className="cartDesc">
            <div className="cart_title">{cart.cart[0].title}</div>
            <div className="cart_desc">
              <div className="cart_desc-title">Deskripsi</div>
              <div className="cart_desc-desc">{cart.cart[0].description}</div>
            </div>
            <div className="cart_price">
              <div className="cart_price-title">Harga</div>
              <div className="cart_price-desc">
                {`Rp. ${cart.cart[0].price} / ${cart.cart[0].unit}`}
              </div>
            </div>
            <div className="cart_total_price">
              <div className="cart_price-title">Sub Total</div>
              <div className="cart_price-desc me-auto">
                {`Rp. ${cart.cart[0].price * qty}`}
              </div>
              <button
                type="button"
                className="btn btn-danger btn-sm me-1"
                onClick={() => {
                  props.del(cart._id);
                }}
              >
                <i className="fas fa-trash" />
              </button>
              <div className="input-group input-group-sm">
                <button
                  type="button"
                  className="input-group-text"
                  onClick={() => {
                    return onQty(true);
                  }}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control text-center"
                  aria-label="qty"
                  value={qty}
                  min={1}
                  onChange={(e) => {
                    setQty(Number(e.target.value));
                  }}
                />
                <button
                  type="button"
                  className="input-group-text"
                  onClick={() => {
                    return onQty(false);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default CartList;
