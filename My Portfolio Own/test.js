let a = [1,2,3,0];
function multiply(array){
    let final = [];
    let m = 1;
    
    return array.reduce((a,b) => {
        let m = a*b;
        
        array.forEach(z=>{
            let value = m/z;
            final.push(value);
            return final;
        });
    },1);
}

console.log(multiply(a));