// Q-1
{

    let str = "as log as i live";
    let r= ""
    for(let i= str.length-1 ;i<= 0;i--){
      r+=str[i]
      
    }
    console.log(r);
    
}
// Q-2 how to check if an objects is an array or not ?
{
  function checkarray(value){
   return Array.isArray(value)
  }
   console.log(checkarray({}));
   console.log(checkarray([]));
    
    checkarray([])
   
}
// Q-3 how to empty an array in javascript ?
{
  let array = [1,2,3,4,5,6]
  array.length = 0
}
// Q-4 hoW WOULD YOU CHECK IF A NUMBER IS AN INTEGER ?
{
  let num = 3 ;
  if(num % 1 ==0){
    console.log("number is integer");
  }
  else{
    console.log("   number is float");
  }
}
// q-5 make this work duuplicat([1,2,3,4,5]);
{
  function duplicate(array){
  return array.concat(array)
  }

console.log(  duplicate([1,2,3,4,5]) );

}
{
  function reverse(num){
    return Number(num.toString().split("").reverse().join(""))
  }
  console.log(reverse(34));
  
}

