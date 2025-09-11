let anime = new Map()
// set
anime.set("Naruto","4th great ninja war")
anime.set("One Piece","Wano Arc")
anime.set("bleach","Thousand Year Blood War")
console.log(anime)
// get 
console.log("arc :",anime.get("One Piece"))
console.log("arc :",anime.get("bleach"))
// has
console.log((anime.has("Demon Slayer")))
// Delete
console.log(anime.delete("bleach"))
console.log(anime.has("bleach"))
console.log("anime deleted:", anime)
// keys
for(let key of anime.keys()){
    console.log("keys:",key)
}
// values
for(let value of anime.values()){
    console.log("values:",value)
}
// entries
for(let entry of anime.entries()){
    console.log("entries:",entry)
}
// forEach
anime.forEach((value,key)=>{
    console.log(`${key} : ${value}`)
})
// clear
anime.clear()
console.log("after clear:",anime)
 