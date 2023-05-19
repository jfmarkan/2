const x = [1, 5, -1, 30, 21, 48, -10, 76];
let found = false;

for (let i = 0; i < x.length; i++){;
    if (found === false){
        console.log(x[i]);
    }
    
    if (x[i] > 30){
        found = true;
    }
}