import React, { useState } from 'react';
import {Link } from "react-router-dom";

import banner from '../images/banner.png';

const Home = () => {
  
    return(
           <div className="home" id="home">
                <div className="home_container bg-grid">
                    <div className="home_data">
                        <h1 className="home_title">HABESHA<br /><span>COLLECTION</span></h1>
                        <Link to="/products"><button className="button">GO SHOPPING</button></Link>
                    </div>

                    <img src={banner} alt="" className="home_img" />
                </div>
            </div>
      
    );
}

export default Home;