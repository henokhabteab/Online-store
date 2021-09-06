import React, { useState } from 'react';
import pendant1 from '../images/silverpendant1.png';
import pendant2 from '../images/pendant2.png';
import pendant3 from '../images/ring1.png';
import pendant4 from '../images/pendant4.png';
import pendant5 from '../images/pendant5.png';

import pendant6 from '../images/ring2.png';
import pendant7 from '../images/silverpendant2.png';
import pendant8 from '../images/pendant8.png';
import pendant9 from '../images/silverpendat3.png';
import pendant10 from '../images/eritreanecklace.png';


import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';


const Products = (props) => {
    console.log(props);
    return(
            <div className="container" id="products">
            <div className="image">
            <img src={pendant1} alt="pendant" />
            <h3>Gray necklace</h3>
            <h3>$190.00</h3>
            <a onClick={() => props.addBasket('pendant1')} className="addToCart cart1" href="#">Add to cart</a>
            </div>
    
            <div className="image">
            <img src={pendant2} alt="pendant" />
            <h3>Golden necklace</h3>
            <h3>$250.00</h3>
            <a onClick={() => props.addBasket('pendant2')} className="addToCart cart2" href="#">Add to cart</a>
            </div>
    
            <div className="image">
            <img src={pendant3} alt="pendant" />
            <h3>Men's Silver Ring</h3>
            <h3>$120.00</h3>
            <a onClick={() => props.addBasket('pendant3')} className="addToCart cart3" href="#">Add to cart</a>
            </div>
    
            <div className="image">
            <img src={pendant4} alt="pendant" />
            <h3>Women's necklace</h3>
            <h3>$300.00</h3>
            <a onClick={() => props.addBasket('pendant4')} className="addToCart cart4" href="#">Add to cart</a>
            </div>

            <div className="image">
            <img src={pendant5} alt="pendant" />
            <h3>Women's necklace</h3>
            <h3>$220.00</h3>
            <a onClick={() => props.addBasket('pendant5')} className="addToCart cart4" href="#">Add to cart</a>
            </div>

            <div className="image">
            <img src={pendant6} alt="pendant" />
            <h3>Marriage Ring</h3>
            <h3>$80.00</h3>
            <a onClick={() => props.addBasket('pendant6')} className="addToCart cart1" href="#">Add to cart</a>
            </div>
    
            <div className="image">
            <img src={pendant7} alt="pendant" />
            <h3>Silver Cross Necklace</h3>
            <h3>$50.00</h3>
            <a onClick={() => props.addBasket('pendant7')} className="addToCart cart2" href="#">Add to cart</a>
            </div>
    
            <div className="image">
            <img src={pendant8} alt="pendant" />
            <h3>Gobagub Necklace</h3>
            <h3>$170.00</h3>
            <a onClick={() => props.addBasket('pendant8')} className="addToCart cart3" href="#">Add to cart</a>
            </div>
    
            <div className="image">
            <img src={pendant9} alt="pendant" />
            <h3>Men's Cross necklace</h3>
            <h3>$60.00</h3>
            <a onClick={() => props.addBasket('pendant9')} className="addToCart cart4" href="#">Add to cart</a>
            </div>

            <div className="image">
            <img src={pendant10} alt="pendant" />
            <h3>Eritrea necklace</h3>
            <h3>$270.00</h3>
            <a onClick={() => props.addBasket('pendant10')} className="addToCart cart4" href="#">Add to cart</a>
            </div>
            

        </div>
        );
}

export default connect(null, { addBasket })(Products);