import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
// import { addBasket } from '../actions/addAction';

function Navbar(props) {
     console.log(props);

     useEffect(() => {
         getNumbers();
     }, []);
    
    return (
        <header className="l-header" id="header">
            <nav className="nav bd-grid">
                <div>
                    <Link to="#" className="nav_logo">ARHAN</Link>
                </div>

                <div className="nav_menu" id="nav-menu">
                    <ul className="nav_list">
                        <li className="nav_item"><Link smooth to="/" className="nav_link active">Home</Link></li>
                        <li className="nav_item"><Link smooth to="/products" className="nav_link">Products</Link></li>
                        <li className="nav_item"><Link smooth to="/newArrivals" className="nav_link">New Arrivals</Link></li>
                        <li className="nav_item"><Link smooth to="/cart" className="nav_link">
                        <button className="p"><ion-icon name="basket"></ion-icon></button> Cart<span> {props.basketProps.basketNumbers}</span></Link></li>
                    </ul>
                </div>

                <div>
                    <i className="bx bx-cart nav_cart"></i>
                    <i className="bx bx-menu nav_toggle" id="nav-toggle"></i>
                </div>
            </nav>
        </header>  
    );

    }  

    const mapStateToProps = state => ({
        basketProps: state.basketState
    })

    export default connect(mapStateToProps, { getNumbers })(Navbar);