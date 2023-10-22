import React, { useState } from 'react';
import './Card.css';

const Card = (Data) => {

    const { itemName, itemImage, itemPrice, itemDetails, itemQuantity, itemColor, itemBrand } = Data.Data;

    const [selectedColor, setSelectedColor] = useState('#9bdc28');
    const [selectedBrand, setselectedBrand] = useState("'Brand'");

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    const cardStyle = {
        '--before-bg-color': selectedColor,
        '--content': selectedBrand,
    };

    return (
        <div className='container c1'>
            <div className='card' style={cardStyle}>
                <div className='imgBx'>
                    <img src="/shoes.png" alt="" />
                </div>
                <div className='contentBx'>
                    <h2>Nike Shoe</h2>
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
