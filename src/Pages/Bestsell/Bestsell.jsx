import React from 'react';
import Title from '../../Components/Title';

const Bestsell = () => {
    return (
        <div className='mb-16'>
            <Title heading='Best Selling'></Title>
            <div className='flex flex-col md:flex-row items-center justify-center gap-5'>

                <div className="card w-72 glass">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>

                <div className="card w-72 glass">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
                   
            </div>
        </div>
    );
};

export default Bestsell;