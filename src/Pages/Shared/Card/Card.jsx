import React, { useState } from 'react';
import './Card.css';

const Card = () => {
    const [selectedColor, setSelectedColor] = useState();

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    
    const containerStyle = {
        card: document.querySelector(".container .card"),
    };

    if (containerStyle.card) {
        containerStyle.card.style.setProperty("--before-bg-color", selectedColor ? selectedColor : '#9bdc28');
    } 
    // else {
    //     console.error("Element not found.");
    // }

    return (
        <div className='container c1'>
            <div className='card' style={containerStyle}>
                <div className='imgBx'>
                    <img src="/shoes.png" alt="" />
                </div>
                <div className='contentBx'>
                    <h2>Nike Shoes</h2>
                    <div className='size'>
                        <h3>Size : </h3>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                    </div>
                    <div className='color'>
                        <h3>Color : </h3>
                        <span onClick={() => handleColorClick('#9bdc28')} className={selectedColor === '#9bdc28' ? 'selected' : ''}></span>
                        <span onClick={() => handleColorClick('#03a9f4')} className={selectedColor === '#03a9f4' ? 'selected' : ''}></span>
                        <span onClick={() => handleColorClick('#e91e63')} className={selectedColor === '#e91e63' ? 'selected' : ''}></span>
                    </div>
                    <a href="">Add to Cart</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
