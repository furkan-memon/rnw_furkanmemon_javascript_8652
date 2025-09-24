// Syntax of Object
{
    let anime = {
        luffy : "Hito Hito no Mi" ,
        Kizaru :"Pika Pika no Mi" ,
        Buggy : "Bara Bara no Mi",
        whitebeard : "Tremor-Tremor"
    }
    // Dot notetion
    console.log(anime.luffy);
    console.log(anime.Kizaru);
    console.log(anime.Buggy);
    
}
{
    let anime = {
        luffy : "Hito Hito no Mi" ,
        Kizaru :"Pika Pika no Mi" ,
        Buggy : "Bara Bara no Mi",
        whitebeard : "Tremor-Tremor"
    }
    // Brecket notetion
    console.log(anime["luffy"])
    console.log(anime["Kizaru"]);
    console.log(anime["Buggy"]);
    
}
{
    // object method
    let anime = {
       firstname:"Monky ",
    lastname:"D luffy",
    fullname : function(){
      return this.firstname + " " + this.lastname
    }
  }
  console.log(anime.fullname());
  
}
{
    let one_piece = {
  strawhat : ["luffy" , "zoro" ,"sanji"],
  whitebeard : ["whitebeard" , "Marco the Phoenix" ," gol d ace"],
  redhair : [" Shanks ", "Benn Beckman ", "Lucky Roux "]
 }
 console.log( one_piece.strawhat[2]);
 console.log( one_piece.whitebeard[0]);
 console.log(one_piece.redhair[1]);
 
 
}
{
    let one_piece = [
        { cap :"luffy", left :'zoro' ,right : "sanji"},
        { cap :"whitebeard", left :'Marco the Phoenix' ,right : "gol d ace"},
        { cap :" Shanks", left :'Benn Beckman' ,right : "Lucky Roux"}
    ]
    console.log(one_piece[2]);
    console.log(one_piece[0]);
    console.log(one_piece[1]);
    
}
{
    
}