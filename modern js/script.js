//importing module 
// import {addToCart,totalPrcie as tp} from './shoppingCart.js';

// addToCart('bread',4);

// console.log(tp);

// console.log("importing module");

// //importing everything into a object 
import * as shoppingCart from './shoppingCart.js';
// // shoppingCart.addToCart('pizza',4);
// // console.log(shoppingCart.totalPrcie);

// //default importing 
import add,{cart} from './shoppingCart.js';
add('pizza',3);
add('bread',4);
console.log(...[Object.values(cart)]);

console.log("cart");

//                 //top level await (due to type='module')

//                 //blocks the execution not only in this module also the module those
//                 //imported this module
// const res=await fetch('https://jsonplaceholder.typicode.com/posts');
// const data=await res.json();
// console.log(data.at(-1).title);

// console.log('something');


                //MODULE PATTERN 
// const shoppingCart2=(function(){
//     const  cart=[];
//     const shippingCost=10;
//     const totalPrcie=344;
//     const totalQunatity=89;

//     const addToCart=function(product,quantity){
//         cart.push({product,quantity});
//         console.log(`${quantity} ${product} is added to the cart`);
//     };

//     const orderStock=function(product,quantity){
//         console.log(`${quantity} ${product} ordered  stock`);
//     };

//     return {
//         addToCart,
//         totalPrcie,
//         totalQunatity,
//         orderStock
//     };
// })();

// shoppingCart2.addToCart('pizza',2);
// shoppingCart2.addToCart('bread',4);
// shoppingCart2.orderStock('bread',3);
// console.log(shoppingCart2.cart); //undefined bucz we didnt return it 

                //IMPORTING THIRD PARTY LIBRARY LODASH
import clonedeep from "./node_modules/lodash-es/cloneDeep.js";
 
const state={
    cart:[
        {product :'bread',quantity:7},
        {product :'pizza',quantity:3},

    ],
    user  :{loggedin:true}
};
const stateclone=Object.assign({},state);
const statedeepclone=clonedeep(state);
state.user.loggedin=false;
console.log(stateclone)

console.log(statedeepclone);