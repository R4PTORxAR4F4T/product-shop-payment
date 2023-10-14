import React, { useEffect, useState } from 'react';
import Title from '../../Components/Title';

const Category = () => {
    
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    console.log(categories);

    return (
        
        <div className='mb-16'>
            <Title heading='Category'></Title>
            <div className='flex flex-wrap justify-center gap-x-3 gap-y-5 lg:gap-x-10 px-5 lg:px-0 border'>

            {categories.map((category, index) => (
                    <div key={index} title={category.name} className='flex flex-col items-center p-4 shadow-lg shadow-black rounded-full bg-gray-200 w-20 h-20 lg:w-[95px] lg:h-[95px]'>
                    <img  className='w-5 h-5 lg:w-[60px] lg:h-[60px]' src={category.icon} alt={category.name} />
                    <p>{category.name}</p>
                </div>
                ))}
                {/* <p className='text-5xl text-slate'>hi</p> */}
            </div>
            
        </div>
    );
};

export default Category;