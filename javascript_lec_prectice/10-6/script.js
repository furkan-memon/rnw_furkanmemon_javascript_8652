// Javascript Function Call()
{

  function greet(name) {
      return "Hello, " + name + "!";
  }
  let resulte = greet.call(this, "Alice");
  let resulte2 = greet.call(this, "Bob");
  console.log(resulte);
  console.log(resulte2);
}
// function call / apply
{
  function introduce(city, country) {
      return "I am from " + city + ", " + country + ".";
  }
  let result = introduce.call(this, "New York", "USA");
  let result2 = introduce.apply(this, ["Los Angeles", "USA"]);
  console.log(result);
  console.log(result2);
}
{
  function anime(name, mc){
    return " i really like "+name+" and the main character is "+mc;
  }
  let resulte = anime.call(this, "One Piece","luffy");
  let resulte2 = anime.apply(this, ["Naruto","naruto"]);
  console.log(resulte);
  console.log(resulte2);
}
// Object definition
{

  let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    
  }
  function bookinfo(){
    return this.title + " was written by " + this.author + " in " + this.year + ".";
  }
  let result = bookinfo.call(book);
  console.log(result);
}
{
  function urdunovel(name, author) {
    this.name = name;
    this.author = author;
  }
  function novle1(name,author){
    urdunovel.call(this,name,author);
    this.boyname = "salar sikandar"
    this.girlname = "imama"
  }
   function novle2(name,author){
    urdunovel.call(this,name,author);
    this.boyname = "umar jahangir"
    this.girlname = "Alije"
  }
  let novle3 = new novle1("Peer e Kamil","Umera Ahmed");
  console.log(novle3.name , novle3.author , novle3.boyname , novle3.girlname);
  
  let novle4 = new novle2("Amrbail","Umera Ahmed");
  console.log(novle4.name , novle4.author , novle4.boyname , novle4.girlname);
}
//  function apply method
{
  function multiply(a, b) {
      return a * b;
  }
  let result = multiply.apply(this, [5, 10]);
  console.log(result);
}
// multiple array with apply method
{
  function sumNumbers(numbers) {
      return numbers.reduce((sum, num) => sum + num, 0);
  }
  let nums = [1, 2, 3, 4, 5];
  let result = sumNumbers.apply(this, [nums]);
  console.log(result);
}