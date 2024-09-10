'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displaymovements=function(movements){
      containerMovements.innerHTML='';
        movements.forEach(function(mov,i){
          const type=mov>0?'deposit':'withdrawal';
          const html=`
          <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;
        containerMovements.insertAdjacentHTML('afterbegin',html);
        })
}




const createusername=function(accs){
  accs.forEach(function(acc){
    acc.username=acc.owner
    .toLowerCase()
    .split(' ')
    .map((n)=>`${n[0]}`)
    .join('');
    
  })
  // console.log(accounts);
//   const username='arr of string'
// .toLowerCase()
// .split(' ')
// .map((n)=>`${n[0]}`)
// .join('');
// return username;
}

createusername(accounts);

const updateUI=function(acc){
  displaymovements(acc.movements);
  calprintbalance(acc);
  calcDisplaySummary(acc);

}



const calprintbalance=function(acc){
  acc.balance=acc.movements.reduce((acc,mov)=>acc+mov,0);
  labelBalance.textContent=acc.balance+'€';
}


const calcDisplaySummary=function(acc){
  const deposits=acc.movements
  .filter(mov=>mov>0)
  .reduce((acc,mov)=>acc+mov,0);

  const withdrawals=acc.movements
  .filter(mov=>mov<0)
  .reduce((acc,mov)=>acc+mov,0);
  labelSumIn.textContent=deposits+'€';
  labelSumOut.textContent=Math.abs(withdrawals)+'€';

  const interest=movements
  .filter(mov=>mov>0)
  .map(mov=>(mov*acc.interestRate)/100)
  .reduce((acc,mov)=>acc+mov,0);
  labelSumInterest.textContent=Math.trunc(interest)+'€';

}


//                creating event handlers

//              login 
let currentacc;
btnLogin.addEventListener('click',function(e){
  e.preventDefault();//this property prevents function from submitting
  currentacc=accounts.find(acc=>acc.username===inputLoginUsername.value);
  console.log(currentacc);
  if(currentacc?.pin===Number(inputLoginPin.value)){//? reads only curacc existsa
    //displaying ui and message
    labelWelcome.textContent=`welcome ${currentacc.owner
      .split(' ')[0]
    }`;
    //clearing the input fields
    inputLoginUsername.value=inputLoginPin.value='';
    inputLoginPin.blur();//blurs the mouse blink
    
    containerApp.style.opacity=100;
    //display movements
    // displaymovements(currentacc.movements);
    //displaying balance
    // calprintbalance(currentacc);
    //displaying summary
    // calcDisplaySummary(currentacc);
    //refactoring the ui 
    updateUI(currentacc);


  }
});

//          transfer money seciton

btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  const amount=Number(inputTransferAmount.value);
  const receiverAcc=accounts.find(acc=>acc.username===
    inputTransferTo.value);
  console.log(amount,receiverAcc);
  if(amount>0 && amount<=currentacc.balance && receiverAcc 
     && receiverAcc?.username!==currentacc.username){
      
      //doing the transfer
      currentacc.movements.push(-amount);
      receiverAcc.movements.push(amount);
      updateUI(currentacc);
      inputTransferAmount.value=inputTransferTo.value='';

  }
  else{
    console.log('invalid');
  }
});


///             request loan section
btnLoan.addEventListener('click',function(e){
  e.preventDefault();
  console.log('loan');
  const amount=Number(inputLoanAmount.value);
  if(amount>0 && currentacc.movements.some(mov=>mov>=amount*0.1)){
    //adding movement
    currentacc.movements.push(amount);
    updateUI(currentacc);
  }
  inputLoanAmount='';
});

///             closing acc section


btnClose.addEventListener('click',function(e){
  e.preventDefault();
  if(inputCloseUsername.value==currentacc.username && Number(inputClosePin.value)==currentacc.pin){
    const index=accounts.findIndex(acc=>acc.username===currentacc.username);
    console.log(index);
    //delecting acc
    accounts.splice(index,1);//1 is no of items to be deleted
    console.log(accounts);
    containerApp.style.opacity=0;
    
  }
  inputClosePin.value=inputCloseUsername.value='';
})
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


//          slice method
// const arr=[1,2,3,4];
// console.log(arr.slice(2))
// console.log([...arr]);

// splice method 
//splice method mutate the original arr
// console.log(arr.splice(2));//removes from arr
// const hey=arr.splice(2)
// console.log(arr);//here remaining arr

// console.log(arr.splice(1,1))//first one gives the position 
// //and second one gives the no of elements to be deleted
// console.log(arr);

//          reverse() method

// const r=['a',1,23,3,'b']
// console.log(r.reverse())
// console.log(r);//reverse method also mutate the original

//      concat
// const s=[3,4,5,6];
// console.log(r.concat(s));
// console.log([...r,...s]);


//        join 
// console.log(r.join('-'));


//        at 
// console.log(r.at(0));
//getting last element
// console.log(r.slice(-1)[0]);//here [0] is used bcuz to remove array
// console.log(r[r.length-1]);



// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for(const move of movements){
// for(const [i,move] of movements.entries()){
//   if(move>0){
//     console.log(`you deposited ${move} of position ${i+1}`);
//   }
//   else{
//     console.log(`you withdrawn ${Math.abs(move)} of position ${i+1}`);
//   }
// }

                  //using   FOREACH
// movements.forEach(function(move){
// movements.forEach(function(move,index,array){
//   if(move>0){
//     console.log(`you deposited ${move} of position ${index+1} in array of ${array}`);
//   }
//   else{
//     console.log(`you withdrawn ${Math.abs(move)} of position ${index+1}`);
//   }

// }) in first iteration 0:function(200) 
//1:function(450)


                //FOREACH ON MAPS AND SETS
                
// const currencie=new Map([
//   ['raki',1],
//   ['sri',2]
// ])
// console.log([...currencie].join(''));
// for(const [i,j] of currencie.entries()){
//   console.log(i);
// }


// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value,key,map){
//   console.log(`value is ${value} and key is ${key}`)
// })

// const ppl=new Set(['raki','raki','sri','liki','navi','sri','vas']);
// console.log(ppl);
// ppl.forEach(function(val,set){
//   console.log(val,set);

// })




/*Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/
// const checkDogs=function(arr){
      
//   arr.forEach(function(dog,i){
//     if(dog>=3){
//       console.log(`dog no ${i+1} is an adult`);
//     }
//     else{
//       console.log(`dog no ${i+1} is a puppy`);

//     }
//   })
// }
// const julia=[3, 5, 2, 12, 7];
// const newjulia=julia.splice(1,julia.length-3);
// const kate=[4, 1, 15, 8, 3];
// checkDogs([...newjulia,...kate]);


            //data trasformation MAP
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const ero=1.1;
// const newmovements=movements.map(function(mov){
//   return mov*ero;
// })
// console.log(newmovements);  


// const newmov=movements.map((mov)=>{
//   return mov*2;
// })//mov=>mov*2
// console.log(newmov);


// movements.map(function(move,index){
//   if(move>0){
//         console.log(`you deposited ${move} of position ${index+1} `);
//       }
//       else{
//         console.log(`you withdrawn ${Math.abs(move)} of position ${index+1}`);
//       }
// })

// const movementsDescriptions=movements.map((move,index)=>{
//   if(move>0){
//         return `you deposited ${move} of position ${index+1} `
//       }
//       else{
//         return `you withdrawn ${Math.abs(move)} of position ${index+1}`;
//       }
// })
//simplyfication 
// const movementsDescriptions=movements.map((move,index)=>
//   `you ${move>0?'deposit':'withdrawal'} in the position of ${index+1}`
// )

// console.log(movementsDescriptions);


                  // FILTER

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // movements.forEach((i)=>console.log(i));
// const deposits=movements.filter((mov)=>mov>0)
// console.log(deposits);
// const withdrawals=movements.filter((mov)=>mov<0)
// console.log(withdrawals);


              // REDUCE
// const balance=movements.reduce((acc,cur,i,arr)=>{
//   console.log(`at iteration ${i} total is ${acc}`)
//   return acc+cur
// },0);//0 is start of accumulator
// console.log(balance); 

//        finding maximum
// const max=movements.reduce((acc,cur)=>{
//     if(acc>cur) return acc;
//     else return cur
// },movements[0]);
// console.log(max)


// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]*/
// const a=[5, 2, 4, 1, 15, 8, 3];
// const b=[16, 6, 10, 5, 6, 1, 4];
// const age=[...a,...b]
// const calcAverageHumanAge=function(age){
//   const humanage=age.map((mov)=>{
//     if(mov<=2) return mov*2
//     else return 16+mov*4
//   })
//   console.log(humanage);
//   const filhumage=humanage.filter((mov)=>mov>18)
//   console.log(filhumage);
//   const avghumage=filhumage.reduce((acc,mov)=>acc+mov,0)
//   // console.log(filhumage.length);
//   // console.log(avghumage);
//   console.log(avghumage/filhumage.length);
// }
// calcAverageHumanAge(age);/

          //same using chaining 
// const calcAverageHumanAg=age
// .map((mov)=>mov<=2?mov*2:16+mov*4)
// .filter((mov)=>mov>18)
// .reduce((acc,mov,i,arr)=>acc+mov/arr.length,0)
// console.log(calcAverageHumanAg);


              //pipeline using all three array methods together


// const eurToUsd=1.1;
// const totalDepositsUSD=movements
// .filter((mov)=>mov>0)
// .map((mov)=>mov*eurToUsd)
// .reduce((acc,mov)=>acc+mov,0)
// console.log(totalDepositsUSD);


                // FIND METHOD -->only return one element that first satifies the condition
// const firstWithdrawal=movements.find(mov=>mov<0)
// console.log(firstWithdrawal);
// console.log(accounts);
// const acc=accounts.find(acc=>acc.owner=='Jessica Davis');
// console.log(acc);

                    //some ->when need to check condition
console.log(movements);
//equality
const val=movements.includes(-130);
console.log(val);
//condition
const valu=movements.some(mov=>mov>5000);
console.log(valu);
