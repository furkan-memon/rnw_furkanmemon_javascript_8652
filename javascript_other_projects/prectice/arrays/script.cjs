const numbers = [1, 2, 3, 4, 5];
console.log(numbers[3]);
// array methods
// push
{
const numbers = [1, 2, 3, 4, 5];
numbers.push(10)
console.log(numbers);

}
// pop
{

    const numbers = [1, 2, 3, 4, 5];
    numbers.pop()
    console.log(numbers);
}
// shift
{
    const numbers = [1, 2, 3, 4, 5];
    numbers.shift(0)
    console.log(numbers);
}
// unshift
{
    const numbers = [1, 2, 3, 4, 5];
    numbers.unshift(1,12)
    console.log(numbers);
}
// splice
{
     const numbers = [1, 2, 3, 4, 5];
    numbers.splice(2,1)
    console.log(numbers);
}
// slice
{
    const numbers = [1, 2, 3, 4, 5];
   let resulte = numbers.slice(0,4)
    console.log(resulte);
}
// reverse
{
    const numbers = [1, 2, 3, 4, 5];
    numbers.reverse()
    console.log(numbers);
}
// short
{
const numbers = [1, 2, 7, 65, 10];
   let nsr = numbers.sort(function(a,b) {
        return b - a
    });
   console.log(nsr);
   
}
// for each 
{

    const numbers = [1, 2, 3, 4, 5];
   numbers.forEach(function(val){
    val+=10
    console.log(val);
    
   })
}
// map
{
    const numbers = [1, 2, 3, 4, 5];
    let newq = numbers.map(function(val){
        return val + 10;
    })
    console.log(newq);
    
}
// filter 
{
    const numbers = [1, 2, 3, 4, 5];
   let newq = numbers.filter (function( val){
        if (val > 2) return true
    })
    console.log(newq);
    
}
//  reduce
{
    const numbers = [1, 2, 3, 4, 5];
    console.log(numbers.reduce(function(accumulator , val ){
        return accumulator + val
    } , 0));
    
}
// find
{
    const numbers = [1, 2, 3, 4, 5];

    let n = numbers.find(function(val){
        return val == 4
    })
    console.log(n);
    
}
//  some 
{
    const numbers = [1, 2, 3, 4, 5];
    let n =  numbers.some(function (val){

        return val > 3 
    }) 
    console.log(n);
    
}
// EVRY
{
    const numbers = [1, 2, 3, 4, 5];
let n = numbers.every(function (val){
    return val  == 4
})
console.log(n);

}
// destructing
{
    const numbers = [1, 2, 3, 4, 5];
let [a,b, ,n] = numbers;
console.log(a);

}
// spread operator
{
    let numbers = [1, 2, 3, 4, 5];
      let n = [...numbers];
console.log(n);
}
// qutions
{
    let arr = [ "mango" , "apple" , "banana" ]
    console.log(arr[1]);
    
}
{
    let arr = [ "mango" , "apple" , "banana" ]
    arr.push("orange")
    arr.unshift("pineapple")
    console.log(arr);
}
{
    let arr = [ "mango" , "apple" , "banana" ]
    
    arr[2] = "grape"
    console.log(arr);

}
{
    let arr = [ "mango" , "apple" , "banana" ]
arr.pop()
console.log(arr);
}
{
    let an = ["aot","op"]
    an.splice(1,0,"mno")
    console.log(an);
}
{
    let arr = [1,2,3,4,5]
    arr.splice(2,2)
    console.log(arr);                                   
}
{
    let nam = ["zain" , "ali" , "umer" , "ahmed"]
    nam.sort().reverse()
    console.log(nam);
}
{
    let arr = [1,2,3,4,5]
    let newarr = arr.map(function(val){
        return val * val
    })
    console.log(newarr);
}
{
    let arr = [10 ,2,43,2,13]
    let newarr = arr.filter(function(val){
        return val > 10
    })
    console.log(newarr);
}
{
    let arr = [1,2,3,4,5]

    let sum = arr.reduce(function(pe,c){
        return pe + c
    },0)
    console.log(sum);
}
{
    let arr = [1,2,3,4,5]

    let findn = arr.find(function(val){
        return val < 5
    })
    console.log(findn);
}
{
    let arr = [1,2,3,4,5]

    let somen = arr.some(function(val){
        return val > 4
    })
    console.log(somen);
}
{
    let arr = [1,2,3,4,5]

    let everyn = arr.every(function(val){
        return val%2==0
    })
    console.log(everyn);
}
{
    let arr = [1,2,3,4,5]

    let [a,b, ,d,e] = arr
    console.log(d);
    console.log(e);
}
{
    let arr = [1,2,3,4,5]

    let newarr = [...arr]
    console.log(newarr);
}
{
    let countries = ["pakistan" , "india" , "china" , "japan"]
    countries = ["usa", "uk" , ...countries , "france"]
    console.log(countries);
}