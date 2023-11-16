import React, { useState } from 'react';
import Card from '../Shared/Card/Card';
import './AddItem.css';
import Sketch from '@uiw/react-color-sketch';
import Title from '../../Components/Title';

const AddItem = () => {

    const img_hosting_token = 'ea9d6f63d462c945411ce1d1d0ab33ae'
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    // console.log(img_hosting_url);
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

    // console.log(formData);

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const SubmitData = async (event) => {
        // Check if all required fields are filled
        const requiredFields = ['itemName', 'itemImage', 'itemBrand', 'itemCategory', 'itemPrice', 'itemQuantity', 'itemDetails', 'itemColor'];

        const isFormValid = requiredFields.every(field => formData[field]);
    
        if (isFormValid) {
            // If the form is valid, you can proceed with submitting the data
            event.preventDefault();
            console.log(data);
            // Upload the image to imgBB
            const formDataForImage = new FormData();
            formDataForImage.append('itemImage', formData.itemImage);
    
            try {
                const response = await fetch(img_hosting_url, {
                    method: 'POST',
                    body: formDataForImage,
                });
    
                const imgBBData = await response.json();
    
                // Check for errors in the ImgBB API response
                if (imgBBData.status_code === 200) {
                    // Update formData with the hosted image URL
                    setFormData({
                        ...formData,
                        itemImage: imgBBData.data.url,
                    });
    
                    // Now you can log the updated form data
                    console.log('Form data is valid:', formData);
    
                    // Add logic to send data to the server or perform other actions
                } else {
                    console.error('ImgBB API Error:', imgBBData);
                }
            } catch (error) {
                console.error('Error uploading image to imgBB:', error);
                console.error('ImgBB API response:', await response.json());
            }
        } else {
            // If the form is not valid, display an error message or handle it accordingly
            console.log('Please fill in all required fields.');
        }
    };

    return (
        <div className='w-[90%] mx-auto'>
            <div className='border'><Title heading='Add Item'></Title></div>
            <div className='flex flex-col lg:flex-row justify-center gap-20 mb-10 border'>
            <div className='item-box' id="formContainer">
                <form id="inputForm" className='flex flex-col md:grid md:grid-cols-2 gap-10'>
                    <div className='user-box'>
                        <input autoComplete="off" type="text" id="itemName" value={formData.itemName} onChange={handleChange} required />
                        <label htmlFor="itemName">Item Name:</label>
                    </div>

                    <div className='user-box'>
                        {/* <label htmlFor="itemImage">Image URL:</label> */}
                        <input autoComplete="off" type="file" id="itemImage" value={formData.itemImage} onChange={handleChange} required className="file-input file-input-ghost w-full w-full" />
                    </div>

                    <div className='user-box'>
                        <input autoComplete="off" type="text" id="itemBrand" value={formData.itemBrand} onChange={handleChange} required />
                        <label htmlFor="itemBrand">Item Brand:</label>
                    </div>

                    <div className='user-box'>
                        <select defaultValue='Pick the Dress Categories' id="itemCategory" onChange={handleChange} required className="select w-full">
                            <option disabled >Pick the Dress Categories</option>
                            <option value='Casual'>Casual</option>
                            <option value='Formal'>Formal</option>
                            <option value='Sports'>Sports</option>
                            <option value='Business'>Business</option>
                            <option value='Outdoor'>Outdoor</option>
                            <option value='Beach'>Beach</option>
                            <option value='Traditional'>Traditional</option>
                            <option value='Active'>Active</option>
                            <option value='Sleep'>Sleep</option>
                        </select>
                    </div>

                    <div className='user-box'>
                        <input autoComplete="off" type="number" pattern="[0-9]{4}" id="itemPrice" value={formData.itemPrice} onChange={handleChange} required />
                        <label htmlFor="itemPrice">Item Price:</label>
                    </div>

                    <div className='user-box'>
                        <input autoComplete="off" type="number" pattern="[0-9]{4}" id="itemQuantity" value={formData.itemQuantity} onChange={handleChange} required />
                        <label htmlFor="itemQuantity">Item Quantity:</label>
                    </div>

                    <div className='text-box'>
                        <label className='' htmlFor="itemDetails">Item Details:</label>
                        <textarea className="textarea textarea-ed h-40 w-full mt-3" id="itemDetails" value={formData.itemDetails} onChange={handleChange} placeholder="Bio" required></textarea>
                    </div>

                    <div className='color-box'>
                        {/* <input autocomplete="off" type="text" id="itemColor" value={formData.itemColor} onChange={handleChange} required /> */}
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

                <form action=""></form>
            </div>
            <div className='flex flex-col' id="dataContainer">
                <Card Data={formData}></Card>

                <button onClick={SubmitData} form='inputForm' className="btn btn-outline mt-10">Submit</button>
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



























