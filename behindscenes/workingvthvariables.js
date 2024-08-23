'use strict';
// function age(brdy){
//     const a=2037-brdy;
//     console.log(firstname);
//     function printage(){
//         console.log(`your age is ${a} and brithy${brdy}`);
//     }
//     if (brdy>=1981 && brdy<=2006){
//         var adult=true;
//         const b=`your aged man${firstname}`;
//         // const c=`hello my sis nameis ${sis}`;
//         // console.log(c);
//         // const sis="liki";
        
//         console.log(b);
//     }
//     console.log(adult);
//     printage();
//     console.log(last);
//     return a;   
// }
// const firstname='raki';
// var last='pall';
//  age(2003);  
// console.log(add(2,4));
// function add(a,b){
//     return a+b;
// }
//  const addrowfun=(a,b)=>a+b;


//imp


// var firstname="ram";
// const raki={
//     firstname:"raki",
//     display:function(){
//         console.log(this.firstname);
//     },
//     displ:()=>{
//         console.log(this.firstname);
//     }

// }
// raki.display();
// raki.displ();

//arrow fun can inherit this keyword 
const raki={
    firstname:"raki",
    display:function(){
        console.log(this.firstname);
        const displ=()=>{
            console.log(this.firstname);
        }
        displ();
    },
    

}
raki.display();
