'use strict';
                    //default functions

// const bookingarr=[]
// const createbooking=function(flightno,nopass=1,price=199){
//     // nopass||=1;
//     // price||=199;
//     const booking={
//         flightno,
//         nopass,
//         price
//     }
//     console.log(booking);
//     bookingarr.push(booking);
// };

// createbooking('lh123',undefined,2000);
// console.log(bookingarr);



//              parameterized functions


// const flight='lr09';
// const per={
//     name:'raki',
//     age:21,
//     passport:900
// }

// const checkin=function(flight,person){
//     flight="HH45";
//     person.name="Mr."+person.name;
//     if(person.passport===900){
//         alert("check in success");
//     }
//     else{
//         alert("wrong passport");
//     }

// }

// checkin(flight,per);
// console.log(flight);
// console.log(per.name);
//when a number is passed as a parameter to a function 
//it cannt be effected but if object is passed it can 
//be effect and changes the value

// const newpass=function(person){
//     person.passport=Math.trunc(Math.random()*1000000);
// }

// newpass(per);
// checkin(flight,per);
// console.log(per);


// function oneword(str){
//     return str.replace(/ /g,'').toLowerCase();
// };

// const str=prompt('enter str');
// console.log(`one word string is ${oneword(str)}`);

// function high5(){
//     console.log("high5");
// }
// document.body.addEventListener('click',high5);



//                  function returning another fun

// const greet =function(greeting){

//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greethey=greet('hey');
// greethey('raki');
// greethey('sri');


// greet('hey')('raki');

//       challenge writing in arrow function

// const greet=greeting=>namee=>console.log(`${greeting} ${namee}`);
// greet('hey')('raki');


//                      call method

const raki={
    name:'raki',
    age:21,
    info:[],
    infopush(f){
        this.info.push(`${this.name} ${this.age} and realtion ${f}`);
    }
}

const sri={
    name:'sri',
    age:21,
    info:[],
}

const inffo=raki.infopush;
console.log(inffo);
//it doesnt work becz the refered fun doesnt know the this 
// inffo('mother');
// inffo.call(sri,'mother');
// inffo.call(raki,'brother');

// inffo.call(raki,'mother');
// console.log(raki);

// raki.infopush('mother');
// raki.infopush('father');
// console.log(raki);

//               apply method

// const arr=['bestfrnd']
// inffo.apply(sri,arr);
// console.log(sri);

//               bind method

// const rakibi=inffo.bind(raki);
// rakibi('sister');
// console.log(raki.info);
// //we have binded obj using bind method
// const sribi=inffo.bind(sri);
// sribi('lover');
// console.log(sri.info);



//                  with event listner

// raki.degree=20;
// // sri.degree=90;
// raki.indegree=function(){
//     this.degree++;
//     console.log(this.degree);
// }
// raki.indegree();
// raki.indegree();

// document.querySelector('.buy').addEventListener('click',raki.indegree.bind(raki));
//in the above bind is used to mention the this otherwise this points to the button
        

// const addtax=(value,rate)=>value+value*rate;
// console.log(addtax(0.1,200));
// const addvat=addtax.bind(null,0.23);
// console.log(addvat(100));
// console.log(addvat(120));

const addtax=(rate)=>(value)=>value+value*rate;
console.log(addtax(200)(1.0))



