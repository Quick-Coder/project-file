import React from 'react';

import logo from'../../images/logo.png';
import Style from './Header.css';

const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
           <div className="nav d-flex justify-content-center">                
             <nav>
               <a href="/shop">Shop</a>
               <a href="/review">Review Order</a>
               <a href="/mange">Manage</a>
             </nav>
           </div>
        </div>
    );
};

export default Header;