var readlineSync = require('readline-sync');

let V= readlineSync.question();
let N= parseInt(readlineSync.question());

for(let z=0;z<N;++z) {
    let B=readlineSync.question();
    var i=0,j=0;
    var pos=false;
    while(i < V.length && j < B.length ){
        if(V[i]===B[j])  j++;
        if(B.length === j){
            console.log("POSITIVE")
            pos=true;
            break;
        }
        i++;
    }
    if(!pos){
        console.log("NEGATIVE")
    }
}
