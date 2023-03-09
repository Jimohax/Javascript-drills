let letters = [];
let word = '';

let rword = '';



const makePalindrum = (word)=>{
    for (i=0; i<word.length; i++ ){
        letters.push(word[i]);
       
    //    console.log(rword);
    }
    
    for (i=0; i<letters.length; i++ ){
           
        rword += letters.pop();
    }
    
    if (word === rword){
        console.log(word + " is a palindrum");
       }else{
        console.log(word + " is not a palindrum");
       }
    
}
    makePalindrum('dad');
