'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const openingHours= {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order:function(startindex,mainindex){
    return [this.starterMenu[startindex],this.mainMenu[mainindex]]

  },


  openingHours,
  

  orderpasta(ing1,ing2,ing3){
    console.log(`here is your pasta with ${ing1},${ing2},${ing3}`);
  },

  orderpizza:function(maining,...others){
    console.log(maining);
    console.log(others);
  }
};

// let [x, ,y]=restaurant.mainMenu;
// console.log(x,y);
// [x,y]=[y,x]
// console.log(x,y);

// console.log(restaurant.order(2,0));

// const nest=[2,4,[5,6]];
// let [i,,[j,k]]=nest;

// console.log(i,j,k);

// const {name,openingHours,categories}=restaurant;
// console.log(name,openingHours,categories);

// const {name:restname,openingHours:hrs,categories:cat}=restaurant;
// console.log(hrs,cat);
//mutating objects
// let a=99;
// let b=90;
// const Ob={a:23,b:13};
// ({a,b}=Ob); 
// console.log(a,b)

// const {fri:{open:o,close:c}}=hrs;
// console.log(o,c);


                    //spread operation

// const arr=[1,32,4];
// const newarr=[2,3,...arr];
// console.log(newarr);
// console.log(...newarr);

// const newmain=[...restaurant.mainMenu,'mista','rastha'];
// console.log(newmain);
// console.log(...newmain);

//joining arrays using spread operator
// const cpymain=[...restaurant.mainMenu];
// const ttmemu=[...cpymain,...restaurant.starterMenu]
// console.log(...ttmemu);

// const str='raki';
// const letter=[...str,' ','e'];
// console.log(letter);

//calling order pasta fucntion
// const ingred=[prompt('lets make pasta with ing1'),
//   prompt('lets make pasta with ing2'),
//   prompt('lets make pasta with ing3')
// ];
// restaurant.orderpasta(...ingred);

//mutating two objects
// const newrest={founder:'raki',...restaurant,owner:'naveen'};
// console.log(newrest);
// const copynew={...newrest};
// copynew.founder="ramu";
// console.log(copynew);

                //rest pattern
                // bucz it is right side

/*DESTRUCTORING
// 1.rest for arrays
// const [a,b,...next]=[1,2,3,3,4,5];
// console.log(a,b,...next);

// const [piza, ,pasta,...others]=[...restaurant.starterMenu,
//   ...restaurant.mainMenu];
// console.log(piza,pasta,others);

//2.rest for objects
const {sat,...weekdays}=restaurant.openingHours;
console.log(weekdays);
console.log(sat);
*/

/*FUNCTIONING */
// const add=function(...number){
//   let sum=0;
//   for(let i=0;i<number.length;i++){
//     sum+=number[i]
//   }
//   console.log(sum);

// }
// add(2,4);
// add(2,3,4,5)
// add(4,5,6,6,7,6,5,5);

// restaurant.orderpizza('mushroom','onion','spinach')
// restaurant.orderpizza('onion')

// const rest1={
//   name:'rest1',
//   guests:0
// }
// const rest2={
//   name:'rest2',
//   owner:'raki'
// }
// rest1.guests=rest1.guests||10;
// rest2.guests=rest2.guests||10;
// rest1.guests||=10;
// rest2.guests||=10;
      //                  nullish
// rest1.guests??=10;
// rest2.guests??=10;


// rest1.owner&&='<ananymous>';
// rest2.owner&&="<ananymous>";
// console.log(rest1,rest2);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [team1,team2]=[...game.players];
// console.log(team1,team2);

// const [gk,...fieldPlayers]=team1;
// console.log(gk);
// console.log(fieldPlayers);

// const [...teams]=[...team1,...team2];
// console.log(teams);

// const [...player1final]=[...team1,'raki','ramu','naveen'];
// console.log(player1final);
 
// const raki=game.odds;
// console.log(raki);
            //defactoring objects
// const {odds:{team1,x:draw,team2}}=game;
// console.log(team1,draw,team2);

// const printgoals=function(...rest){
//   console.log(`${rest.length} goals are scored`);

// }
// printgoals('raki','ramu','ramesh');
// printgoals('raki','ramu','ramesh','kiki','liki');
// printgoals(...game.scored);

// team1<team2 && console.log('TEAM 1 is more likely to win');
// team2<team1 || console.log('team 2 is more likly to loose');

// const menu=[...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(menu);
// for(let i=0;i<menu.length;i++){
//   console.log(menu[i]);
// }


// for(const item of menu) console.log(item);
// for(const item of menu.entries()) {
//   console.log(`our ${item[0]+1}  is ${item[1]}`);
// }
// console.log(...menu.entries());

// for( const [i,j] of menu.entries()){
//   console.log(i,j);
// }

// for(const item of restaurant.mainMenu){
//   console.log(item);
// }

// if(restaurant.openingHours && restaurant.openingHours.mon){
//   console.log(restaurant.openingHours.mon.open);
// }


// const week=['mon','tue','wed','thu','fri','sat','sun'];
// for(const item of week){
//   // console.log(item);
//   // console.log(restaurant.openingHours[item]);//if we want to use varible as property we need to 
//   //keep that in the []
//   const openn=restaurant.openingHours[item]?.open ?? 'closed';
//   //on above we used changing property ?.if it exists if gives
//   //or it gives undefined
//   console.log(`on ${item} we open at ${openn}`);
// }
// console.log(restaurant.openingHours);

//          optinal changing operator on method
// console.log(restaurant.orderpizza?.(7,3,4,7) ?? 'method doesnt exist');

// //on arrays
// const user=[{ name:'raki',email:'raki@gmail.com'}];
// console.log(user[0]?.name ?? 'user array empty');




//              looping objects

// 1. property name ==keys
// for(const day of Object.keys(openingHours)){
//   console.log(day);
// }

// const days=(Object.keys(openingHours)).length;
// let str=`we open on ${days} days:`
// for(const day of Object.keys(openingHours)){
//   str+=`${day},`;
// }
// console.log(str);
// const pro=Object.keys(openingHours);
// console.log(pro);
// console.log(`we are open on ${pro.length} days`)
// for(const item of Object.keys(restaurant)){
//   console.log(item);
// }


// 2.object values
// const value=Object.values(openingHours);
// console.log(value);
// const entrie=Object.entries(openingHours);
// console.log(entrie);
// for(const [key,{open,close}] of entrie) {
//   console.log(`on ${key} we open at ${open} closes at ${close}`);
// }


//          coding challenge
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const scores=game.scored
// for (const [i,sc] of scores.entries()){
//   console.log(`goal no ${i+1}: ${sc}`);
// }

// const odd=Object.values(game.odds)
// let avg=0;
// for(const i of odd) avg+=i;
// avg/=odd.length;
// console.log(avg);



// const od=game.odds
// for (const [i,j] of Object.entries(od)){
//   const teams =i==='x'?'draw':`victory ${game[i]}`
//   console.log(`odd of ${teams} : ${j}`);
// }



///                 SETS

// const foods=new Set(
//   [
//     'raki',
//     'ramu',
//     'raki',
//     'sri',
//     'liki',
//     'vasa',
//     'sri'
//   ]
// )
// console.log(foods);
// console.log(new Set('raki'));
// console.log(foods.size);
// console.log(foods.has('raki'));
// console.log(foods.has('rakki'));
// console.log(foods.delete('raki'));
// console.log(foods);
// console.log(foods.add('raki'));
// console.log(foods);

// for(const val of foods) console.log(val);
// console.log(new Set('rakeshpalla').size);


//                MAPS


// const rest=new Map();
// rest.set('name','apollo');
// rest .set(1,'rjy'),
// rest.set('categories',[1,2,3,4])
// rest.set(true,'we are open')
// rest.set(false,'we are closed');
// rest.set('open',9)
// rest.set('close',21)  
// rest.set(document.querySelector('h1'),'HEADING');
// // console.log(rest.get(true));
// // console.log(rest.get('name'));
// // console.log(rest.get('categories'));
// const time=22
// console.log(rest.get(time>rest.get('open') && time<rest.get('close')));
// console.log(rest.has(2));
// console.log(rest.delete('open'));
// console.log(rest);


//maps also takes anything as key and pairs it to value


// const obj={
//   raki:'hello',
//   1:'people'
// }

// console.log(obj.1);//here it is not allowing number 
//bucz objs only take string as keys 


// const app=new Map([
//   ['correct',3],
//   [true,'correct'],
//   [false,'try again']
// ])
// const ans=Number(prompt('enter answer'));
// console.log(ans);
// console.log(app);
// console.log(app.get(app.get('correct')==ans));
// console.log([...app.values()]);
// for (const [i,j] of app) console.log(i);



//        coding challenge

// Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const val=[...gameEvents.values()];
// console.log([...new Set(val)]);
// gameEvents.delete(69);
// console.log(gameEvents);

// for (const [i,j] of gameEvents) {

//   const half=i<=45?'first':'second';
//   console.log(`${half} half  ${i} :${j}`);
// }


//          strings

// const name='   raki   ';
// console.log(name[0]);
// console.log(name.indexOf('k'));
// console.log(name.slice(2));
// console.log(name.length);
// console.log(name.trim().length);

// console.log('rakiliki navi vasa'.split(' '));
// const [fn,ln]='raki palla'.split(' ');
// console.log(fn);
// const str=['mr',fn,ln.toUpperCase()].join(' ');
// console.log(str); 
// console.log('raki'.padStart(20,'+').padEnd(30,'+'));

// const  maskCreditCard=function (number){
//   const str=number+''//easy trick or we can use String(number)
//   const last=str.slice(-4);
//   console.log(last.padStart(str.length,'*'));

// }
// maskCreditCard(56733565);
// maskCreditCard('6427836472857847');
// maskCreditCard('79827453928598239845');


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));



document.querySelector('button').addEventListener('click',function(){
  const text=document.querySelector('textarea').value; 
  const rows=text.split('\n'); 
  console.log(rows);
  for(const [i,row] of rows.entries()){
  
    const [frist,last]=row.toLowerCase().trim().split('_');
    const s= `${frist}${last.replace(last[0],last[0].toUpperCase())}`;
    console.log(`${s.padEnd(20,' ')}${'👍'.repeat(i+1)}`);
  }
  
})