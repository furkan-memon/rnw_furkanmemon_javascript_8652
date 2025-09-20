// find()
{
    let arr = [10,18,20,25,40,52]
    let risulte = arr.find((value) => value < 18)
  console.log(risulte);
}
// findIndex()
{
      let arr = [10,18,20,25,40,52]
    let risulte = arr.findIndex((value) => value < 18)
  console.log(risulte);
}
// findelast()
{
      let arr = [10,18,20,25,40,52]
    let risulte = arr.findLast((value) => value > 10)
  console.log(risulte);
}
// findLastIndex()
{
      let arr = [10,18,20,25,40,52]
    let risulte = arr.findLastIndex((value) => value > 10)
  console.log(risulte);
}
// push()
{
      let arr = [10,18,20,25,40,52]
    let risulte = arr.push("aman")
  console.log(risulte);
  console.log(arr); 
  

}
// pop()
{

    let arr = [10,18,20,25,40,52]
        let risulte = arr.pop("aman")
      console.log(risulte);
      console.log(arr); 
}
// unshift()
{
    let arr = [10,18,20,25,40,52]
        let risulte = arr.unshift("aman")
      console.log(risulte);
      console.log(arr); 
}
// shift()
{
    let arr = [10,18,20,25,40,52]
        let risulte = arr.shift("aman")
      console.log(risulte);
      console.log(arr); 
}
// includes()
{
       let arr = [10,18,20,25,40,52]
        let risulte = arr.includes(19)
      console.log(risulte);
      console.log(arr);
}
// indexOf()
{
    let anime = ["op","aot" ,"dbz","hXh","jjk"]
    let risulte = anime.indexOf("aot")
    console.log(risulte);
    
}
// lastIndexOf()
{
    let anime = ["op","aot" ,"dbz","op","jjk"]
    let risulte = anime.lastIndexOf("op")
    console.log(risulte);
    
}
// forEach()
{
  let anime = ["op","aot" ,"dbz","op","jjk"]
  anime.forEach((value) => console.log(value))
}
// reduce()
{
  let word = ["Hi",",My","Name"]
  let r = word.reduce((word , word2 ) => word + word2  )
 console.log(r);
  
}
// reduceRigh()
{
    let word = ["Hi",",My","Name"]
  let r = word.reduceRight((word , word2 ) => word + word2  )
 console.log(r);
}
// slice()
{
   let anime = ["op","aot" ,"dbz","op","jjk"]
  let risulte = anime.slice(1,3)
  console.log(anime);
  console.log(risulte);
}
// splice()
{
   let anime = ["op","aot" ,"dbz","op","jjk"]
  anime.splice(1,3)
  console.log(anime);

}