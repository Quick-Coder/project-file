import React from 'react';
import { Link } from 'react-router-dom';
import style from './Product.css'

const Product = (props) => {
    const {img,name,seller,price, key}=props.product;
    const handleAddToCart=props.handleAddToCart;
    return (
        <div className='product-container'>
            <div className="row">
                <div className="col-md-4">
                   <div className="pd-img">
                        <img src={img} alt=""/>
                   </div>
                </div>
                <div className="col-md-8">
                   <div className="pd-content">
                        <h5><Link to={'/'+key}>{name}</Link></h5>
                        <p>{seller}</p>
                        <p><strong>${price}</strong></p>
                       {props.showAddToCart===true && <button className='main-btn'
                        onClick={()=>handleAddToCart(props.product)}
                        >add to cart</button>}
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Product;