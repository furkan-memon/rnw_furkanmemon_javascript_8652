{
    let str ="The quick brown fox jumps over the lazy dog.";
    console.log(str.at(1));
    console.log(str.at(-1));
    // The index (position) of the string character to be returned is passed as a parameter to the at() method.if value -1 is passed, the last character of the string is returned.
}
{
    let str ="The quick brown fox jumps over the lazy dog.";
    console.log(str.charAt(10));
//  A string representing the character at the specified index.
}
{
    let str ="The quick brown fox jumps over the lazy dog.";

    console.log(str.charCodeAt(10));

}
{
    let str1 = "Hello";
    let str2 = "World";
    console.log(str1.concat(" ", str2));
    // A new string containing the combined text of the strings provided.
}
{
    let str ="The quick brown fox jumps over the lazy dog.";
    console.log(str.includes("quick"));
    // true if the search string is found anywhere within the given string, including when searchString is an empty string; otherwise, false.
}
{
    let str ="The quick brown fox jumps over the lazy dog quick.";
    console.log(str.indexOf("quick"));
    // The index of the first occurrence of searchString found, or -1 if not found

}
{
      let str ="The quick brown fox jumps over the lazy dog quick.";
    console.log(str.lastIndexOf("T"));
}