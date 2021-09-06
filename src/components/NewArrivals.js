import React from 'react';
import { connect } from 'react-redux';

import Men from '../images/men1.png';
import Women1 from '../images/women1.png';
import Women2 from '../images/women2.png';
import Coffee from '../images/coffee.png';
import mosob from '../images/mosob.png';
import Mahzel from '../images/mahzel.png';

const NewArrivals = () => {
    return(
            <div className="featured section" id="newArrival">
                <h2 className="section-title">NEW ARRIVALS</h2>
                <a href="#" className="section-all">View All</a>

                <div className="new_container bd-grid">
                    <div className="new_box">
                        <img src={Men} alt="" className="new_img" />

                        <div className="new_link">
                            <a href="#" className="button">VIEW PRODUCT</a>
                        </div>
                    </div>

                    <div className="new_box">
                        <img src={Women1} alt="" className="new_img" />

                        <div className="new_link">
                            <a href="#" className="button">VIEW PRODUCT</a>
                        </div>
                    </div>

                    <div className="new_box">
                        <img src={Women2} alt="" className="new_img" />

                        <div className="new_link">
                            <a href="#" className="button">VIEW PRODUCT</a>
                        </div>
                    </div>

                    <div className="new_box">
                        <img src={Coffee} alt="" className="new_img" />

                        <div className="new_link">
                            <a href="#" className="button">VIEW PRODUCT</a>
                        </div>
                    </div>

                    <div className="new_box">
                    <img src={mosob} alt="" className="new_img" />

                        <div className="new_link">
                            <a href="#" className="button">VIEW PRODUCT</a>
                        </div>
                    </div>

                    <div className="new_box">
                    <img src={Mahzel} alt="" className="new_img" />

                        <div className="new_link">
                            <a href="#" className="button">VIEW PRODUCT</a>
                        </div>
                    </div>
                </div>
            </div>
        );
}

 export default NewArrivals;
