'use strict';
// let ab=false;
// const b=true;
// if(b) ab=true;
// if(ab) console.log('i can drive');
// const aa =19;

//function
// function hello(){
//     console.log("hello");

// }
// hello();
// hello();

// function fp(ap,or){
//     const juice=`juice with ${ap} and ${or}`;
//     return juice;
// }
// const hey=fp(5,0);
// console.log(hey);

//fucntion expression
// const fun=function (age){
//     return age+1;
// }
// const a=fun(41);
// console.log(a);


// 😊arrow function
// const fun=brdy=> 2037-brdy;
// const age =fun(2000);
// console.log(age);


// const a=hello=>hello+2;
// const b=a(Number(prompt("enter no")))
// console.log(`The no is ${b}`);

// const bc=hey=>hey-1;
// const cc=bc(3);
// console.log(cc)

// const ccc=(a,b)=>{
//     return a-b
// }
// console.log(ccc(5,6))
// function fruit(f){
//     return f*4;
// }
// function fp(ap,or){
//     const pa=fruit(ap);
//     const paa=fruit(or);
//     const juice=`juice with ${pa} and ${paa}`;
//     return juice;
// }
// console.log(fp(4,10));

// 😊arrays
// const arr=['raki','liki','sri','bunty'];
// console.log(arr);
// const ar=new Array(1,2,'4','i');
// console.log(ar);
// console.log(ar[1]);
// console.log(ar.length);
// const ab=new Array(3,4,ar,arr);
// console.log(ab);


//😊Array operations
// arr.push('vasavi');
// console.log(arr);
// arr.unshift('naveen');//insert first
// arr.pop()//remove last
// arr.shift()//remove first
// console.log(arr);   
// console.log(arr.indexOf('sri'));
// console.log(arr.includes('vasavi'));//in or not in array
// console.log(arr.includes('raki'));


//😊objects
// const arr=[
//     'raki',
//     1-2,
//     'ram',
//     [1,2]
// ]
// console.log(arr);

// const ar={
//     firstname:'raki',
//     lastname:'palla',
//     brdy:2004,
//     job:'student',
//     frnds:['liki','vas','sri','naveen'],
//     license:true,
    // fun:function(brdy){
    //     return 2024-brdy;
    // }
    // fun : function(){
    //     console.log(this);
    //     return 2024-this.brdy;

    // }
    // fun: function(){
    //     this.age=2024-this.brdy;
    //     return this;
    // }
//     info:function(){
//         return `${this.firstname} has ${this.license?'a':'no'} license`;

//     }
// };
// console.log(ar);
// console.log(ar.job);
// console.log(ar.frnds[1]);
// console.log(ar['job']);
// const namekey='name';
// console.log(ar['first'+namekey]);
// console.log(ar['last'+namekey]);

// const inn=prompt("enter ");
// if(ar[inn]){
//     console.log(ar[inn]);
// }
// else{
//     console.log("wrong request");
// }
//adding new property
// ar.location='raju';
// ar.location='rjy';
// ar['location']="rjy uraral";
// ar['role']='jsstudent';
// console.log(ar)
// ar.frnds[1]="likitha";
// console.log(ar.frnds.length);
// console.log(ar.fun(2003));
// console.log(ar['fun']());
// console.log(ar['fun']());
// console.log(ar['info']());
// const raki={
//     fn:"rakesh",
//     mass:75,
//     height:1.72,
//     fun:function(){
//         this.bmi=this.mass/this.height**2;
//         return this.bmi;
//     }

// }
// console.log(raki['fun']());
// if (raki.bmi>20){
//     console.log(`raki your bmi is ${raki.bmi}`);
// }

//😊loops for loop(control statement);
const a=[1,2,3,4]
// const b=[]
// for (let i=a.length-1;i>=0;i-- ){
//     b.push(a[i]);
// }
// console.log(b);

// let i=a.length-1;
// while(i>=0){
//     console.log(a[i]);
//     i--;
// }
let dice=Math.trunc(Math.random()*6)+1;
while(dice!==6){
    console.log(`your dice is ${dice}`);
    dice=Math.trunc(Math.random()*6)+1;
}
