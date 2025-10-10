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
// q-6 write a function that reverse a number
{
  function reverse(num){
    return Number(num.toString().split("").reverse().join(""))
  }
  console.log(reverse(34));
  
}
// q-7 wirte s javascript fubction that checks wether a passed string in palindrome or not
{
  function stringplachack(str){
    
    str.split("")
    let reverse = str.split("").reverse().join("");
    return reverse
  }
  let str = prompt("enter a word")
  let result = stringplachack(str);
  if(str == result){
      console.log("word is palindrome");
    }
    else {
      console.log("word is not palindrome");
    }
  }
  // q-8 write  a javascript function that returns a passed string with letters in alphabetical order
  {
    function stringaplha(str){
      return str.split("").sort()
  }
  console.log(stringaplha("amaan"));
  
}
// q-9
{
  let str = "the quick brown fox";
  function upper(str){
    let arr = str.split(" ")
    for(let i=0;i<arr.length;i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    return arr.join(" ")
  }
  console.log(upper(str));
}
{
  function occ(str){
    let occurrences = {};
    str.split("").forEach(function (elem) {
      occurrences.hasOwnProperty(elem) ? occurrences[elem]++ : occurrences[elem] = 1;
    });
    return occurrences;
  }
  console.log(occ("amaan"));
}