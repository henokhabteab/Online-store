import React from 'react';

const Sponsors = () => {
    return(
        <footer className="footer section" id="footer">
        <div className="footer_container bd-grid">
            <div className="footer_box">
                <h3 className="footer_title">EXPLORE</h3>
                <ul>
                    <li><a href="#" className="footer_link">Home</a></li>
                    <li><a href="#" className="footer_link">Featured</a></li>
                    <li><a href="#" className="footer_link">New</a></li>
                    <li><a href="#" className="footer_link">Subscribe</a></li>
                </ul>
            </div>

            <div className="footer_box">
                <h3 className="footer_title">OUR SERVICES</h3>
                <ul>
                    <li><a href="#" className="footer_link">Pricing</a></li>
                    <li><a href="#" className="footer_link">Free shipping</a></li>
                    <li><a href="#" className="footer_link">Gift Cards</a></li>
                </ul>
            </div>

            <div className="footer_box">
                <h3 className="footer_title">FOLLOW</h3>
                <a href="#" className="footer_social"><i className="bx bx1-facebook-square"></i></a>
                <a href="#" className="footer_social"><i className="bx bx1-instagram-alt"></i></a>
                <a href="#" className="footer_social"><i className="bx bx1-twitter"></i></a>
            </div>
            </div>

            <p className="footer_copy">&#169; 2021 copyright all right reserved</p>
        </footer>
        );
}

export default Sponsors;