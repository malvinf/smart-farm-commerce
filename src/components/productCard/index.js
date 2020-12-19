/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { getCookie } from '../../utils/cookie';
import './style.css';

const ProductCard = (props) => {
  const { p } = props;
  const [qty, setQty] = useState(1);
  const [overQty, setOverQty] = useState(false);

  const cart = [
    {
      title: p.title,
      price: p.price,
      description: p.description,
      images: {
        public_id: p.images.public_id,
        url: p.images.url,
      },
      category: p.category,
      unit: p.unit,
    },
  ];

  const onQty = (params) => {
    if (params) {
      if (qty > 1) {
        setQty(qty - 1);
      }
    } else if (qty < p.stock) {
      setQty(qty + 1);
    }
  };

  useEffect(() => {
    if (qty > p.stock) {
      setOverQty(true);
    } else {
      setOverQty(false);
    }
  }, [qty, p.stock]);

  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img
            src={p.images.url}
            className="card-img-top"
            width="253"
            height="253"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title d-flex">
              <div className="me-auto">{p.title}</div>
              <div className="category">{p.category}</div>
            </h5>
            <p className="card-desc">{p.description}</p>
            <p className="card-text">{`Rp. ${p.price} / ${p.unit}`}</p>
            <div className="card-tocart d-flex">
              <div className="me-auto">
                <div className="input-group">
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
                    max={p.stock}
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
              <button
                type="button"
                className="btn btn-success ms-1"
                disabled={overQty}
                onClick={() => {
                  props.addtocart({
                    cart: { cart },
                    id_user: JSON.parse(getCookie('id')),
                    id: p._id,
                    purchased_stock: qty,
                  });
                }}
              >
                <i className="fas fa-cart-plus" />
              </button>
            </div>
            {overQty ? (
              <p className="overQty">
                *Pembelian maksimal:
                {` ${p.stock}`}
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
