import React from 'react';
import "./ScondPage.css"
import ring1 from "../../images/ring1.png"
import ring2 from "../../images/ring2.png"
const ScondPage = () => {
    return (
        <div className='second p-5'>
            <h1 className='text'>A simple gift for you<span className='span'>!</span></h1>
            <div className="d-flex g-3 row">
                <img className='img-fluid col-md-6 w-75' src={ring1} alt="" />
                <img className='img-fluid col-md-6 w-75' src={ring2} alt="" />
            </div>
            <h4 className='text-secondary'>Timely pea jiva prio</h4>
        </div>
    );
};

export default ScondPage;