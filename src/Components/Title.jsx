import React from 'react';

const Title = ({heading}) => {
    return (
        <div className="text-center my-14">{/*mx-auto text-center md:w-4/12*/}
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-red-500 to-yellow-300 text-4xl font-bold inline-block pb-2 border-b-2"> {heading}</p>
            
        </div>
    );
};

export default Title;
