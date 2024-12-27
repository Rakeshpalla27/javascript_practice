console.log("exporting module");

const shippingCost=10;
export const cart=[];

export const addToCart=function(product,quantity){
    cart.push({product,quantity});
    console.log(`${quantity} ${product} is added to the cart`);
};

const totalPrcie=890;
const totalQunatity=78;

export {totalPrcie,totalQunatity};


//default export
export default function(product,quantity){
    cart.push({product,quantity});
    console.log(`${quantity} ${product} is added to the cart`);
};