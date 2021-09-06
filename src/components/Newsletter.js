import React from 'react';

const Newsletter = () => {
    return(
            <div className="newsletter section" id="suscribed">
            <div className="newsletter_container bd-grid">
                <div className="newsletter_suscribe">
                    <h2 className="section-title">OUR NEWSLETTER</h2>
                    <p className="newsletter_description">Promotion new products and sales. Directly to your</p>

                    <form action="" className="newsletter_form">
                        <input type="text" className="newsletter_input" placeholder="Enter your email" />
                        <a href="#" className="button">SUBSCRIB</a>
                    </form>
                </div>
            </div>
            </div>
        );
}

export default Newsletter;