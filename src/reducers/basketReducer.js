import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, DECREASE_QUANTITY, INCREASE_QUANTITY, CLEAR_PRODUCT } from '../actions/types';

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        pendant1: {
            name: "Gray necklace",
            tagName: 'pendant1',
            price: 190.00,
            numbers: 0,
            inCart: false
        },
        pendant2: {
            name: "Golden necklace",
            tagName: 'pendant2',
            price: 250.00,
            numbers: 0,
            inCart: false
        },
        pendant3: {
            name: "Men's Silver Ring",
            tagName: 'pendant3',
            price: 120.00,
            numbers: 0,
            inCart: false
        },
        pendant4: {
            name: "Women's necklace",
            tagName: 'pendant4',
            price: 300.00,
            numbers: 0,
            inCart: false
        },
        pendant5: {
            name: "Gobagub necklace",
            tagName: 'pendant5',
            price: 240.00,
            numbers: 0,
            inCart: false
        },
        pendant6: {
            name: "Marriage Ring",
            tagName: 'pendant6',
            price: 80.00,
            numbers: 0,
            inCart: false
        },
        pendant7: {
            name: "Silver Cross Necklace",
            tagName: 'pendant7',
            price: 50.00,
            numbers: 0,
            inCart: false
        },
        pendant8: {
            name: "Gobagub Necklace",
            tagName: 'pendant8',
            price: 170.00,
            numbers: 0,
            inCart: false
        },
        pendant9: {
            name: "Men's Cross Necklace",
            tagName: 'pendant9',
            price: 60.00,
            numbers: 0,
            inCart: false
        },
        pendant10: {
            name: "Eritrea necklace",
            tagName: 'pendant10',
            price: 270.00,
            numbers: 0,
            inCart: false
        }
    }
}

export default (state = initialState, action) => {
    let productSelected = "";
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
             productSelected = { ...state.products[action.payload]}
            
            productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log(productSelected);

            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        case INCREASE_QUANTITY:
            productSelected = { ...state.products[action.payload]}
            productSelected.numbers += 1;
            return {
                    ...state,
                    cartCost: state.cartCost + state.products[action.payload].price,
                    products: {
                        ...state.products,
                        [action.payload]: productSelected
                    }
                }
        case DECREASE_QUANTITY:
            productSelected = { ...state.products[action.payload]};
            let newCartCost = 0;
            if(productSelected.numbers === 0) {
                productSelected.numbers = 0;
                newCartCost = state.cartCost
            } else {
                productSelected.numbers -= 1;
                newCartCost = state.cartCost - state.products[action.payload].price
            }
            
            return {
                    ...state,
                    cartCost: newCartCost,
                    products: {
                        ...state.products,
                        [action.payload]: productSelected
                    }
                }
                case CLEAR_PRODUCT:
                    productSelected = { ...state.products[action.payload]};
                    let numbersBackup = productSelected.numbers;
                    productSelected.numbers = 0;
                    productSelected.inCart = false;  
                    return {
                        ...state,
                        cartCost: state.cartCost - ( numbersBackup * productSelected.price),
                        products: {
                            ...state.products,
                            [action.payload]: productSelected
                        }
                    }    
                default: 
                        return state;
    }
}