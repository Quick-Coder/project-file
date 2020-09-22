import React, { useState } from 'react';
import fakeData from '../../fakeData/index';
import database, { addToDatabaseCart } from '../../utilities/databaseManager';
import Product from '../Product/Product';
import style from './Shop.css'


const Shop = () => {    
    const first10=fakeData.slice(0,10);
    const [products, setProduct]= useState(first10);
    const [cart, setCart]=useState([])

    const handleAddToCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
        const sameProduct=newCart.filter(pd=>pd.key===product.key)
        const count=sameProduct.length;
       addToDatabaseCart(product.key,count);
    }
   //handle price
   const total=cart.reduce((total,prd)=>total+prd.price,0);
   //handle shipping
   let shipping=0;
   if(total>35){
       shipping=0;
   }else if(total>15){
        shipping=5.99;
   }else if(total>10){
        shipping=10.99;
   }
   // tax handle
   const tax = total/10;
   
   //formate
   
   const formate=num=>{
       const precision=num.toFixed(2);
       return precision;
   }
    return (
        <div>
            <div className="row">
                <div className="col-md-10">                 
                    <div className="product">
                    {
                    products.map(product=><Product 
                        product={product}
                        handleAddToCart={handleAddToCart}
                        showAddToCart={true}
                        ></Product>)
                    }
                    </div>                  
                </div>
                <div className="col-md-2">
                <div className="cart">
                    <h2>Order Details</h2>
                    <h4>Items:{cart.length}</h4>
                    <h4>Price:{formate(total)}</h4>
                    <h5>Shipping:{formate(shipping)}</h5>
                    <h5>Tax:{formate(tax)}</h5>
                    <h2>Total:${formate(total+shipping+Number(tax))}</h2>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;