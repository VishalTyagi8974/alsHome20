import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import "./itemCard.css"

const ItemCard = ({ heading, paragraph, buttonText = "Explore Now", locbtn, body, background = "white", btnClass, explorePage, className, height = "450px" }) => {

    return (
        <div className={`${className}`}>
            <div className={`container p-0 card border-0 shadow rounded-5 my-3 my-md-4   d-flex flex-column justify-content-between itemCard `} style={{
                background: background, overflow: "hidden", height: height

            }}>
                <div>
                    {body}
                </div>
                <div className="text-start p-4">
                    <div className="p-1">
                        <h2 className='mt-0 p-0 fs-5 fw-bolder'>{heading}</h2>
                        <p className={"para"} >{paragraph}</p>
                        <Link to={explorePage} className={`btn btn-sm fw-semibold btn-light rounded-pill bgMainColor py-1 px-3 mb-3 px-2 text-white ${btnClass} text-decoration-none  `} >{buttonText}</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ItemCard;
