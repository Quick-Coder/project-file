import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const OrderDetails = () => {
    const {key}=useParams();
    const product = fakeData.find(pd=>pd.key===key);
    return (
        <div>
            <h1>Order details coming soon</h1>
            <Product product={product}></Product>
        </div>
    );
};

export default OrderDetails;