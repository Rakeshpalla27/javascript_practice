'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const rendererr=function(msg){
    countriesContainer.insertAdjacentText('beforeend',msg);
    // countriesContainer.style.opacity=1;

}

const rendercou=function(data,classname){
    const html =`<article class="country ${classname}">
    <img class="country__img" src="${Object.values(data.flags)[0]}" />
    <div class="country__data">
      <h3 class="country__name">${Object.values(data.name)[0]}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${Object.keys(data.languages)[0]}</p>
      <p class="country__row"><span>💰</span>${Object.keys(data.currencies)[0]}</p>
    </div>
  </article>`;

countriesContainer.insertAdjacentHTML('beforeend',html);
countriesContainer.style.opacity=1;
};

// const getcountry=function(country){


// const request=new XMLHttpRequest();
// request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
// request.send()
// request.addEventListener('load',function(){
//     const [data]=JSON.parse(this.responseText);
//     console.log(data)

//     const html =`<article class="country">
//           <img class="country__img" src="${Object.values(data.flags)[0]}" />
//           <div class="country__data">
//             <h3 class="country__name">${Object.values(data.name)[0]}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${Object.keys(data.languages)[0]}</p>
//             <p class="country__row"><span>💰</span>${Object.keys(data.currencies)[0]}</p>
//           </div>
//         </article>`;
    
//     countriesContainer.insertAdjacentHTML('beforeend',html);
//     countriesContainer.style.opacity=1;
// })
// };

// getcountry('india');
// getcountry('portugal');
// getcountry('germany');


// country and neighbour country




// const getcountryandneigh=function(country){
//     //ajax call 1
//     const request=new XMLHttpRequest();
//     request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
//     request.send()
//     request.addEventListener('load',function(){
//         const [data]=JSON.parse(this.responseText);
//         console.log(data)
//         //render country 1

//         rendercou(data);
//         //get neighbour country 2

//         // console.log(data.borders);
//         const neighbour=data.borders[0];
//         // console.log(neighbour);
//         if(!neighbour){
//             return;
//         }

//         //ajax call 2
//         //ajax call 1
//     const request2=new XMLHttpRequest();
//     request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load',function(){
//         const [data2]=JSON.parse(this.responseText);
//         console.log(data2);
//         //rendering neighbour
//         rendercou(data2,'neighbour');
//     });
// });
// }; 
    
// getcountryandneigh('germany');

// const request=fetch('https://restcountries.com/v3.1/name/india ');
// console.log(request);

const getjson=function(url,errormsg='something went wrong'){
    fetch(url).then(response=>{
        // console.log(response);
        if(!response.ok){
            throw new Error(`${errormsg} ${response.status}`);
        }
        return response.json();
        
    });
};

// const getcountrydata=function(country){
//     fetch(`https://restcountries.com/v3.1/name/${country}`).
//     then(response=>{
//         if(!response.ok){
//             throw new Error`country not found ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data=>{
//             const cou=Object.values(data)[0];
//             rendercou(cou);
//             const neigh=cou.borders[0];
//             if(!neigh) return ;
//             return fetch(`https://restcountries.com/v3.1/alpha/${neigh}`)
//         }).then(response=>response.json()).then(data=>rendercou(Object.values(data)[0],'neighbour'))
//         .catch(err=>{
//             console.error(`${err} 💣💣💣💣`);
//             rendererr(`something went wrong 🔥🔥 ${err.message}.Try again!`);
//         })
//         .finally(()=>{
//             countriesContainer.style.opacity=1;
//         });

// }
            // const neigh=cou.borders[0];
            // console.log(neigh);
            // fetch(`https://restcountries.com/v3.1/alpha/${neigh}`).then(
            //     function(response){
            //         console.log(response);
            //         return response.json();
            //     }).then(function(data){
            //         const cou1=Object.values(data)[0];
            //         console.log(cou1)
            //         rendercou(cou);
            //     })
        

// const getcountrydata=function(country){
    
//     getjson(`https://restcountries.com/v3.1/name/${country}`,'country not found').then(data=>{
//             const cou=Object.values(data)[0];
//             rendercou(cou);
//             const neigh=cou.borders[0];
//             if(!neigh) throw new Error(`country not found ${response.status}`) ;
//             return getjson(`https://restcountries.com/v3.1/alpha/${neigh}`,'country not found')
//         }).then(data=>rendercou(Object.values(data)[0],'neighbour'))
//         .catch(err=>{
//             console.error(`${err} 💣💣💣💣`);
//             rendererr(`something went wrong 🔥🔥 ${err.message}.Try again!`);
//         })
//         .finally(()=>{
//             countriesContainer.style.opacity=1;
//         });

// }

// btn.addEventListener('click',function(){
//     getcountrydata('india' )
// })


                        //coding challenge

// const whereami=function(lat,lng){

//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res=>{
//         if(!res.ok){
//             throw new Error(`problem with geocoding ${res.status} `);
//         }
//         return res.json()})
//     .then(data=>{
//         console.log(data);
//         console.log(`you are in city ${data.city},${data.country}`);
//         return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(res=>{
//         if(!res.ok){
//             throw new Error(`country not found ${res.status}`);
//         }
//         console.log(res);
//         return res.json()
//     })
//     .then(data=>rendercou(data[0]))
//     .catch(err=>console.error(`${err.message}💣`));
    
// } 

// whereami(52.508,13.381);
// whereami(19.037,72.873);

// whereami(52.508,13.381);
// whereami(19.037,72.873);


                    //event looop pratice

// console.log('test start');
// setTimeout(()=>{
//     console.log('0 sec timer')
// },0);
// Promise.resolve('resloved promise 1')
// .then(res=>{
//     setTimeout(()=>{
//         console.log(res)
//     },3000);
    
// });
// Promise.resolve('resloved promise 2')
// .then(res=>{
//     for(let i=1;i>10000000;i++);
//     console.log(res);

// })

// console.log('test end');


                    // creating a promise

// const lotterypromise=new Promise(function(reslove,reject){

//     console.log('lottery draw is happening');
//     setTimeout(() => {
//         if(Math.random()>=0.5){
//             reslove(`you win 🤑💰`);
//         }
//         else{
//             // throw new Error(`you lose 💩💩`);
//             reject(new Error(`you lose 💩💩`))
//         }
//     }, 1000);
//     console.log('lottery draw is finished');

// });

// lotterypromise.then(res=>console.log(res))
// .catch(err=>console.error(err)); 
// //promisifying setTimeout

// const wait=function(seconds){
//     return new Promise(function(resolve){
//         setTimeout(resolve,seconds*1000)
//     });
// };
// wait(2).then(()=>{
//     console.log('i waited for 2 seconds')
//     return wait(1)
// }).then(()=>console.log('i waited for 1 sec')); 


             //promisifying geolocation api

// navigator.geolocation.getCurrentPosition(
//     position=>console.log(position),
//     err=>console.error(err)
// );

// console.log('loading current location');

// const getposition=function(){
//     return new Promise(function(reslove,reject){
//         // navigator.geolocation.getCurrentPosition(pos=>reslove(pos),err=reject(err));
//         navigator.geolocation.getCurrentPosition(reslove,reject)
//     }
// )}

// getposition().then(res=>console.log(res)).catch(err=>console.error(err));


// const whereami=function(){
//     getposition().then(pos=>{
//         const {latitude:lat,longitude:lng}=pos.coords;
//         return  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })

//     .then(res=>{
//         if(!res.ok){
//             throw new Error(`problem with geocoding ${res.status} `);
//         }
//         return res.json()})
//     .then(data=>{
//         console.log(data);
//         console.log(`you are in city ${data.city},${data.country}`);
//         return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(res=>{
//         if(!res.ok){
//             throw new Error(`country not found ${res.status}`);
//         }
//         console.log(res);
//         return res.json()
//     })
//     .then(data=>rendercou(data[0]))
//     .catch(err=>console.error(`${err.message}💣`));
    
// } 

// btn.addEventListener('click',whereami);


                //coding challenge 2

// const wait=function(sec){
//     return new Promise(function(reslove){
//         setTimeout(reslove,sec*1000);
//     });
// };

// const imgcontainer=document.querySelector('.images');

// const createimg=function(imgpath){
//     return new Promise(function(reslove,reject){
//         const img=document.createElement('img');
//         img.src=imgpath;

//         img.addEventListener('load',function(){
//             imgcontainer.append(img);
//             reslove(img);
//         })
//         img.addEventListener('error',function(){
//             reject('image not found'); 
//         });
//     });
// };
// let currimg;

// createimg('img/img-1.jpg')
// .then((img)=>{
//     currimg=img;
//     console.log('image 1 loaded')
//     return wait(2)})
// .then(()=>{
//     currimg.style.display='none'
//     return createimg('img/img-2.jpg')
// })
// .then((img)=>{
//     currimg=img;
//     console.log('image 2 loaded');
//     return wait(2);
// })
// .then(()=>{
//     currimg.style.display='none';
// })
// .catch(err=>console.log(err));


                    //ASYNC AWAIT

// const getposition=function(){
//     return new Promise(function(reslove,reject){
//         navigator.geolocation.getCurrentPosition(reslove,reject)
//     }
// )};
// // const wheream=function(){
// //     getposition().then(pos=>{
// //         const {latitude:lat,longitude:lng}=pos.coords;
// //         return  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
// // })};

// const whereami=async function(){
//     try{ 
//     let country;
//     //getting position
//     const loc=await getposition();
//     const {latitude:lat,longitude:lng}=loc.coords;
//     //reverse geocoding

//     const lo=await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     const c=await lo.json();
//     country=c.country;

//     const res=await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     console.log(res);
//     // console.log('second');
//     const data=await res.json();
//     console.log(Object.values(data[0].languages)[0]);
//     rendercou(data[0]);
//     return `language they speak is ${Object.values(data[0].languages)[0]}`;
//     }
//     catch(err){
//         console.error(err);
//         //reject promise return from async function
//         throw err;
//     }};

// // whereami();
// console.log('first ');
//             //returning values from async functions


// // const lang=whereami()
// // console.log(lang);  below is the solu for this state
// whereami().then((lang)=>console.log(lang))
// .catch((err)=>
// {
//     console.error(err);
// })
// .finally(()=>{console.log('third')});


                //TRY AND CATCH IN ASYNC
// try{
// const x=10;
// x=30;
// }
// catch(err){
//     console.log(err.message);
// }

 
                //running promises in parallel



// const getcountries=async function(a,b,c){

// try
//     {
    // const c1=await fetch(`https://restcountries.com/v3.1/name/${a}`);
    // const c=await c1.json();
    // console.log(c[0].capital[0]);
    // const c2=await fetch(`https://restcountries.com/v3.1/name/${b}`);
    // const c22=await c2.json();
    // console.log(c22[0].capital[0]);
    // console.log(c2);
    // console.log(c3);

// const data=await Promise.all([
//     const data1=await fetch(`https://restcountries.com/v3.1/name/${a}`),
//     // fetch(`https://restcountries.com/v3.1/name/${b}`),
//     // fetch(`https://restcountries.com/v3.1/name/${c}`),
//     console.log(data1);
// ])
// catch(err){
//     console.error('error while fetching');
// }}

// getcountries('india','portugal','germany');
