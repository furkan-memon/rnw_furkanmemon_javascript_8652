// Javascript constructor function
{
    function novel(){
        this.name = "Peer e Kamil";
        this.author = "Umera Ahmed";
        this.year = 2004;
    }
    let novel1 = new novel();
    console.log(novel1.name);
    console.log(novel1.author);
    console.log(novel1.year);
}
{
    function anime(){
        this.name = "One Piece";
        this.mc = "Luffy";
        this.greet= function(){
          console.log("mina mina sikawa");
        }
    }
      let animeinfo = new anime();
    console.log(animeinfo.name);
    console.log(animeinfo.mc);
    console.log(animeinfo.greet());
}