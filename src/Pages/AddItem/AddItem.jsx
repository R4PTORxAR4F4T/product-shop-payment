import React, { useState } from 'react';
import Card from '../Shared/Card/Card';
import './AddItem.css';

const AddItem = () => {
    const [formData, setFormData] = useState({
        itemName: '',
        itemImage: '',
        itemPrice: '',
        itemDetails: '',
        itemQuantity: '',
        itemColor: '',
        itemBrand: '',
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    return (
        <div className='flex flex-col lg:flex-row justify-center gap-20'>
            <div className='item-box' id="formContainer">
                <form id="inputForm">
                    <div className='user-box'>
                        <input type="text" id="itemName" value={formData.itemName} onChange={handleChange} required />
                        <label htmlFor="itemName">Item Name:</label>
                    </div>

                    <div className='user-box'>
                        <input type="text" id="itemImage" value={formData.itemImage} onChange={handleChange} required />
                        <label htmlFor="itemImage">Image URL:</label>
                    </div>

                    <div className='user-box'>
                        <input type="text" id="itemColor" value={formData.itemColor} onChange={handleChange} required />
                        <label htmlFor="itemColor">Item Color:</label>
                    </div>

                    <div className='user-box'>
                        <input type="text" id="itemBrand" value={formData.itemBrand} onChange={handleChange} required />
                        <label htmlFor="itemBrand">Item Brand:</label>
                    </div>

                    <div className='user-box'>
                        <input type="number" id="itemPrice" value={formData.itemPrice} onChange={handleChange} required />
                        <label htmlFor="itemPrice">Item Price:</label>
                    </div>

                    <div className='user-box'>
                        <textarea className="textarea textarea-ed w-full" id="itemDetails" value={formData.itemDetails} onChange={handleChange} placeholder="Bio" required></textarea>
                        {/* <label htmlFor="itemDetails">Item Details:</label> */}
                    </div>

                    <div className='user-box'>
                        <input type="number" id="itemQuantity" value={formData.itemQuantity} onChange={handleChange} required />
                        <label htmlFor="itemQuantity">Item Quantity:</label>
                    </div>
                </form>
            </div>
            <div className='' id="dataContainer">
                <Card Data={formData}></Card>
                {/* <h2>Form Data</h2>
                <div id="displayedData">
                    <p><strong>Item Name:</strong> {formData.itemName}</p>
                    <p><strong>Item Image URL:</strong> <img src={formData.itemImage} alt="Item Image" /></p>
                    <p><strong>Item Price:</strong> ${formData.itemPrice}</p>
                    <p><strong>Item Details:</strong> {formData.itemDetails}</p>
                    <p><strong>Item Quantity:</strong> {formData.itemQuantity}</p>
                </div> */}
            </div>

        </div>
    );
};

export default AddItem;