import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../actions/productQuantity';

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



function Cart({basketProps, productQuantity, clearProduct}) {
    console.log(basketProps);

    let productsInCart = [];

    Object.keys(basketProps.products).forEach( function(item) {
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if(basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);
    });

   
       const productImages = (product) => {
           if(product.tagName === 'pendant1') {
               return pendant1;
           } else if(product.tagName === 'pendant2'){
               return pendant2;
           } else if(product.tagName === 'pendant3'){
               return pendant3;
           } else if(product.tagName === 'pendant4'){
               return pendant4;
           } else if(product.tagName === 'pendant5'){
            return pendant5;
          } else if(product.tagName === 'pendant6'){
               return pendant6;
           } else if(product.tagName === 'pendant7'){
               return pendant7;
           } else if(product.tagName === 'pendant8'){
               return pendant8;
           } else if(product.tagName === 'pendant9'){
            return pendant9;
          } else if(product.tagName === 'pendant10'){
              return pendant10;
          }

       }

    productsInCart = productsInCart.map( (product, index) => {
        console.log("My product is");
        console.log(product);
      return (
          <Fragment key={index}>
              <div className="product"><ion-icon onClick={() => clearProduct(product.tagName)} name="close-circle"></ion-icon><img src={productImages(product)} />
                  <span className="sm-hide">{product.name}</span>
                  </div>
                  <div className="price sm-hide">${product.price}</div>
                  <div className="quantity">
                      <ion-icon onClick={() => productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
                            <span>{product.numbers}</span>
                      <ion-icon onClick={() => productQuantity('increase', product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
                  </div>
                  <div className="total">{product.numbers * product.price},00</div>
          </Fragment>
      )
    });

    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
            </div>
            <div className="products">
                { productsInCart }
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total</h4>
                <h4 className="basketTotal">{basketProps.cartCost},00</h4>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps, { productQuantity, clearProduct } )(Cart);
