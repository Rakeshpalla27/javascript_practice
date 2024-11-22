'use strict';

// //           ***constructor function***

// const Person=function(firstname,birthyear){
//     this.fn=firstname;
//     this.by=birthyear;
// //     this.disname=function(){
// //         return this.fn;.// as it was wrong practice to create every object gets this method 
// //     }
// }

// const raki=new Person("rakesh",2003);
// console.log(raki);

// const ramu=new Person('ramu',2004);
// console.log(ramu);
// console.log(ramu instanceof Person);
// console.log(raki instanceof Person);

// //prototype (adding the method)
// Person.prototype.calage=function(){
//     return 2024-this.by;
// }
// console.log(raki.calage());
// // console.log(raki.disname());
// console.log(raki.__proto__);
// console.log(raki.__proto__===Person.prototype);
// console.log(Person.prototype);
// console.log(Person.prototype.isPrototypeOf(raki));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.gender="male";
// console.log(raki.gender);

// console.log(raki.hasOwnProperty('gender'));
// console.log(raki.hasOwnProperty('by'));
// //objectprototype is at the top in prototype chain
// console.log(raki.__proto__.__proto__);
// console.dir(Person.prototype.constructor);
// const arr=[1,24,3];
// console.log(arr.__proto__);
// console.log(arr.__proto__===Array.prototype);

// Array.prototype.unquie=function(){
//     return [...new Set(this)];
// };

// console.log(arr.unquie());
// const h1=document.querySelector('h1');
// console.log(h1.__proto__);




//                  ***inheritance btwn classes

// const Person=function(name,brdy){
//     this.name=name;
//     this.brdy=brdy;
// }

// Person.prototype.calage=function(){
//     return 2024-this.brdy;
    
// }

// const Student=function(name,brdy,course){
//     Person.call(this,name,brdy);
//     this.course=course;
// }
// //linking prototypes
// Student.prototype=Object.create(Person.prototype);

// Student.prototype.intro=function(){
//     return ` my name is ${this.name} and course is ${this.course}`;
// }
// // const raki=new Person('raki',2003);
// const raki=new Student('rakesh',2003,'btech');
// console.log(raki.intro());
// console.dir(Student.prototype);
// console.log(raki.calage());
// console.log(raki.__proto__.__proto__);
// console.log(Student.prototype.constructor);
// console.log(raki instanceof Object);




//                  coding challenge  1

// const Car=function(name,speed){
//     this.na=name;
//     this.sp=speed;
// }
// Car.prototype.accelerate=function(){
//     this.sp+=10;
//     console.log(this.sp);
// }
// Car.prototype.break=function(){
//     this.sp-=5;
//     console.log(this.sp);
// }

// const bmw=new Car('bmw',50);
// const mer=new Car('mercedes',60);
// console.log(bmw);
// console.log(mer);
// bmw.accelerate();
// bmw.accelerate();
// bmw.break();
// mer.accelerate();


//                  coding challenge 2

// const Car=function(name,speed,charge){
    

// }
// Car.prototype.accelerate=function(){
//     this.speed+=20;
//     console.log(`speed is ${this.speed}`);

// }
// Car.prototype.break=function(){
//     this.speed-=5;
    
//     console.log(`speed of the car is ${this.speed} and remaining charge${this.charge}`)

// }

// const Ev=function(name,speed,charge){
//     this.name=name;
//     this.speed=speed;
//     this.charge=charge;
// }
// Ev.prototype=Object.create(Car.prototype);

// Ev.prototype.setcharge=function(charge){
//     this.charge=charge;
//     console.log(`charge is ${this.charge}`);
// }
// Ev.prototype.accelerate=function(){
//     this.speed+=20
//     this.charge-=1;

//     console.log(`speed of the car is ${this.speed} and charge is ${this.charge}`)

// }

// const telsa=new Ev('telsa',40);
// telsa.setcharge(50);
// telsa.accelerate();
// telsa.break();
// telsa.accelerate();
//________________________________________________________

//              ***ES6 CLASSES*** 



// class Personcl{
//     constructor(firstname,birthyear){
//         this.fn=firstname;
//         this.by=birthyear;
//     }
//     calage(){
//         return `age of ${this._fn} is ${2024-this.by}`
//     }
//     get age(){
//         return `age of ${this._fn} is ${2024-this.by}`
//     }
//     set fn(fn){
//         this._fn=fn;
//         console.log(`new firstname is ${this._fn}`);
//     }
//     //static method of class not included in prototype
//     static hey(){
//         console.log("hello hey");
//     }
// }

// const raki=new Personcl('rakesh',2003);
// // console.log(raki);
// const age=raki.calage();
// // console.log(age);
// console.log(raki.age);
// raki.fn="rakesh palla";
// console.dir(Personcl.hey());




//                  --getter and setters

// const acc={
//     'name':'raki',
//     'movements':[23,450,230],
//     get latest(){
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov){
//         this.movements.push(mov);
//         console.log(this.movements);
//     }
// }

// console.log(acc.movements);
// console.log(acc.latest);
// acc.latest=50;


//              --coding challenge 1

// class Car{
//     constructor(carname,speed){
//         this.name=carname;
//         this.speed=speed;
//     }
//     accelerate(){
//         this.speed+=10;
//         console.log(`speed of ${this.name} is ${this.speed}`);
//     }
//     break(){
//         this.speed-=5;
//         console.log(`speed of ${this.name} is ${this.speed}`);
//     }
//     get speedus(){
//         return this.speed/1.6;
//     }
//     set speedus(speed){
//         this.speed=speed*1.6;
//     }
// }

// const ford=new Car('ford',50);
// console.log(ford);
// ford.break();
// ford.accelerate();
// console.log(ford.speedus);
// ford.speedus=50;
// console.log(ford.speedus);
// console.log(ford.speed);


//                  inheritance in  ES6 CLASSES

// class Personcl{
//     constructor(firstname,birthyear){
//         this.fn=firstname;
//         this.by=birthyear;
//     }
//     calage(){
//         return `age of ${this._fn} is ${2024-this.by}`
//     }
//     get age(){
//         return `age of ${this._fn} is ${2024-this.by}`
//     }
//     set fn(fn){
//         this._fn=fn;
//         console.log(`new firstname is ${this._fn}`);
//     }
//     //static method of class not included in prototype
//     static hey(){
//         console.log("hello hey");
//     }
// }
    
// class Student extends Personcl{
//     // we have already specified in parent class so no need to right constructor again

//     constructor(name,brdy,course){
//         super(name,brdy);
//         this.course=course;     
//     }
//     coursedis(){
//         return `course is ${this.course}`;
//     }
//     get coursedi(){
//         return `course is ${this.course}`;
//     }

// }
// const raki=new Student('raki',2003,'btech');
// console.log(raki.coursedis());
// console.log(raki.age);
// raki.fn="rakesh";
// console.log(raki.__proto__);


//              real time example


// class Account{
//     //private  fields
//     #movements=[];
//     #pin;

//     constructor(owner,cur,pin){
//         this.owner=owner;
//         this.cur=cur;
//         this.#pin=pin;
//         // this.movements=[];
//         this.locale=navigator.language;
//         console.log(`Thanks for opening account ${this.owner}`);

//     }
//     depoist(val){
//         this.#movements.push(val);
//         return this;
//     }
//     withdraw(val){
//         this.#movements.push(-val);
//         return this;
//     }
//     get moves(){
//         console.log(this.#movements);
//         return this;
//     }
    
//     requestloan(val){
        
//         if(this.#approveloan()){
//             console.log(`loan request granted for amound of ${val}`);
//             this.#movements.push(val);
//         }
//         return this;
//     }
//     //private method
//     #approveloan(){
//         return true;
//     }
//     //static methods
//     static sta(){
//         console.log("hey hello");
//     }
    
// }

// const acc1=new Account('rakesh','ruppes',123);
// console.log(acc1);
// acc1.depoist(200).withdraw(400).depoist(300).withdraw(400).requestloan(500).moves;
// // acc1.moves;
// // acc1.requestloan(300);
// // console.log(acc1);
// Account.sta();


//              CODING CHALLENGE

class Car{
    constructor(name,speed){
        this.name=name;
        this.speed=speed;
        
    }
    accelerate=function(){
        this.speed+=20;
        console.log(`speed is ${this.speed}`);
    
    }
    break=function(){
        this.speed-=5;
        
        console.log(`speed of the car is ${this.speed} and remaining charge${this.charge}`);
        return this;
    
    }
}


class Ev extends Car{
 constructor(name,speed,charge){
    super(name,speed);
    this.charge=charge;
    
    }

    setcharge=function(charge){

    this.charge=charge;
    console.log(`charge is ${this.charge}`);
    return this;
    }
    accelerate=function(){
    this.#getcharge()
    this.speed+=20
    this.charge-=1;

    console.log(`speed of the car is ${this.speed} and charge is ${this.charge}`)
    return this;
    }

    #getcharge(){
        console.log(`charge of telsa is ${this.charge}`);
    }
   
}

const telsa=new Ev('telsa',40,20);
telsa.setcharge(50).accelerate().break().accelerate();
// telsa.accelerate();
// telsa.break();
// telsa.accelerate();





    


//________________________________________________________

//                  ***OBJECT.CREATE***

// const Personob={
//     "calage":function(){
//         return 2024-this.brdy
//     },

//     init(name,brdy){
//         this.name=name;
//         this.brdy=brdy;
//     }
// }

// const raki=Object.create(Personob);
// console.log(raki);
// raki.name='rakesh';
// raki.brdy=2003;
// console.log(raki.calage());

// const sri=Object.create(Personob);
// sri.init("srilatha",2002);
// console.log(sri.calage());


//                  inheritance using create.object

// const Personob={
//     "calage":function(){
//         return 2024-this.brdy
//     },

//     init(name,brdy){
//         this.name=name;
//         this.brdy=brdy;
//     },
//     get age(){
//         console.log(`age of ${this.name} is ${2024-this.brdy}`)
//     }
// }
// const Student=Object.create(Personob);
// Student.init=function(fn,brdy,course){
//     Personob.init.call(this,fn,brdy);
//     this.course=course;
// }
// const raki=Object.create(Student);
// raki.init('raki',2003,'btech')
// console.log(raki.name);

//            
