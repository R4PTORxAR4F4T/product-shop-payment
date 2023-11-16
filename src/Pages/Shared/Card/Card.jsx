import React, { useEffect, useState } from 'react';
import './Card.css';

const Card = (Data) => {

    const {_id, itemName, itemImage, itemPrice, itemDetails, itemQuantity, itemColor, itemBrand } = Data.Data;

    const [selectedColor, setSelectedColor] = useState();
    const [selectedBrand, setSelectedBrand] = useState();

    useEffect(() => {
        const brandValue = itemBrand ? `'${itemBrand}'` : "'Brand'";
        setSelectedBrand(brandValue);
    }, [itemBrand]);
    
    useEffect(() => {
        const colorValue = itemColor ? `${itemColor}` : "#161616";
        setSelectedColor(colorValue); // Update selectedColor when itemColor changes
    }, [itemColor]);

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    const cardStyle = {
        '--before-bg-color': selectedColor,
        '--content': selectedBrand,
    };

    const handleDivClick = () => {
        if (_id) {
            console.log(_id);
            // Navigate to another page
            window.location.href = 'another_page.html';
        } else {
            // Do nothing if _id is not available
            console.log("No _id available");
        }
    }
    
	/*
	const handleDivClick = (_id) => {
        window.location.href = `another_page.html?id=${_id}`;
    }
	*/

    return (
        <div 
            className='container c1 flex justify-center' 
            onClick={handleDivClick}
            // onClick={() => handleDivClick(_id)}
        >
            <div className='card' style={cardStyle}>
                <div className='imgBx'>
                    <img src="/shoes.png" alt="" />
                </div>
                <div className='contentBx'>
                    <h2>{itemName ? <>{itemName}</> : <>Item Name</>}</h2>
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
