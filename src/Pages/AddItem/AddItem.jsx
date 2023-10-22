import React, { useState } from 'react';
import Card from '../Shared/Card/Card';
import './AddItem.css';
import Sketch from '@uiw/react-color-sketch';
import Title from '../../Components/Title';

const AddItem = () => {
    const [formData, setFormData] = useState({
        itemName: '',
        itemImage: '',
        itemBrand: '',
        itemCategory:'',
        itemPrice: '',
        itemQuantity: '',
        itemDetails: '',
        itemColor: '',
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    return (
        <div className='w-[90%] mx-auto'>
            <Title heading='Add Item'></Title>
            <div className='flex flex-col md:flex-row justify-center gap-20 mb-10'>
            <div className='item-box' id="formContainer">
                <form id="inputForm" className='flex flex-col lg:grid lg:grid-cols-2 gap-10'>
                    <div className='user-box'>
                        <input type="text" id="itemName" value={formData.itemName} onChange={handleChange} required />
                        <label htmlFor="itemName">Item Name:</label>
                    </div>

                    <div className='user-box'>
                        {/* <label htmlFor="itemImage">Image URL:</label> */}
                        <input type="file" id="itemImage" value={formData.itemImage} onChange={handleChange} required className="file-input file-input-ghost w-full w-full" />
                    </div>

                    <div className='user-box'>
                        <input type="text" id="itemBrand" value={formData.itemBrand} onChange={handleChange} required />
                        <label htmlFor="itemBrand">Item Brand:</label>
                    </div>

                    <div className='user-box'>
                        <select id="itemCategory" value={formData.itemCategory} onChange={handleChange} required className="select select-ghost w-full">
                            <option disabled selected>Pick the best JS framework</option>
                            <option>Svelte</option>
                            <option>Vue</option>
                            <option>React</option>
                        </select>
                        {/* <label htmlFor="itemCategory">Item Category:</label> */}
                    </div>

                    <div className='user-box'>
                        <input type="number" pattern="[0-9]{4}" id="itemPrice" value={formData.itemPrice} onChange={handleChange} required />
                        <label htmlFor="itemPrice">Item Price:</label>
                    </div>

                    <div className='user-box'>
                        <input type="number" pattern="[0-9]{4}" id="itemQuantity" value={formData.itemQuantity} onChange={handleChange} required />
                        <label htmlFor="itemQuantity">Item Quantity:</label>
                    </div>

                    <div className='text-box'>
                        <label className='' htmlFor="itemDetails">Item Details:</label>
                        <textarea className="textarea textarea-ed w-full mt-3" id="itemDetails" value={formData.itemDetails} onChange={handleChange} placeholder="Bio" required></textarea>
                    </div>

                    <div className='color-box'>
                        {/* <input type="text" id="itemColor" value={formData.itemColor} onChange={handleChange} required /> */}
                        <label htmlFor="itemColor">Item Color:</label>
                        <Sketch
                            id="itemColor"
                            style={{marginTop:10, marginBottom:20}}
                            color={formData.itemColor}
                            onChange={(color) => {
                                setFormData({
                                    ...formData,
                                    ["itemColor"]: color.hex,
                                });
                            }}
                        />
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
        </div>
    );
};

export default AddItem;