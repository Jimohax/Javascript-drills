



const makePalindrum = (word)=>{
    let letters = [];
// let word = '';

let rword = '';

    for (i=0; i<word.length; i++ ){
        letters.push(word[i]);
       
    //    console.log(rword);
    }
    
    for (i=0; i<word.length; i++ ){
           
        rword += letters.pop();
    }
    
    if (word === rword){
        console.log(word + " is a palindrum");
       }else{
        console.log(word + " is not a palindrum");
       }
    
}
    makePalindrum('racecar');

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
//  fruits.pop();
// // console.log(poped);
// document.getElementById("demo").innerHTML = fruits;