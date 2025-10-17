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
    
    05
}