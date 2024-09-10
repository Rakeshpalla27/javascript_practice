// Remember, we're gonna use strict mode in all scripts now!
'use strict';
const fun=function(a){
    let amin=a[0]
    let amax=a[0]
    for(let i=0;i<a.length;i++){
        if (a[i]=="error"){
            continue;
        }
        if (amin>a[i]){
            amin=a[i]
        }
        if (amax<a[i]){
            amax=a[i];
        }
        
    

    }
    return (amax-amin);

};

const temp=[1,2,-4,-5,'error',9,13,17,8,9];
console.log(fun(temp));
