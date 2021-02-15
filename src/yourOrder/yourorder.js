import React from 'react';
import './yourorder.css';
import Header from '../header/Header.js';


function YourOrder() {
    
    var y = document.scrollY

document.getElementById("root").addEventListener("scroll", ()=>{console.log("scroll")})

    return (
    <div className="your-order">
        <Header></Header>
            <div className="proba">proba</div>
        </div> 
    );
}

export default YourOrder;