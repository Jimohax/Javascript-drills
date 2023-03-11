// let username;
// let newName;

// newName = window.prompt("WHat is your name?");
// const bnew = ()=>{

//     document.getElementById("p1").innerHTML = newName;
// }
// bnew();
// document.getElementById("myButton").onclick = function () {
// 	username = document.getElementById("myInput").value;
// 	document.getElementById("p1").innerHTML = "Hello " + username;
// 	// console.log(newName);

// };

//  let counter = 0;

//  document.getElementById("increase").onclick = ()=>{
//          counter ++;
//         document.getElementById("show").innerHTML = counter;
//  }
//  document.getElementById("decrease").onclick = ()=>{
//      counter --;
//     document.getElementById("show").innerHTML = counter;
// }

// document.getElementById("reset").onclick = ()=>{
//     counter = 0;
//     document.getElementById("show").innerHTML = counter;
// }

// let x = Math.ceil(Math.random() * 6);
// console.log(x);

// let username = "Casey Joe";
// let fname;
// let lname;

//   lname = username.slice(username.indexOf(" ") + 1);
//   fname = username.slice(0, username.indexOf(" "));

//   console.log(lname);
//   console.log(fname);

// let area;
// let width;
// let height;

// width = window.prompt("width");
// height = window.prompt("height");



 
// function getArea(width, height) {
// 	let result = width * height;
// 	return result
// };

// area = getArea(5, 8);
// console.log(area);

// let mainNum = Math.ceil(Math.random() * 10);
// console.log(mainNum);
// let guesses = 0;
// document.getElementById("button").onclick = function(){
//  let  guess = document.getElementById("guess").value ;

//  guesses += 1

//  if (guess == mainNum){
//     console.log(`You got the number, ${mainNum} with ${guesses} number of tries` );
//  }else if(guess < mainNum){
//     console.log("Too small");
//  }else if (guess > mainNum){
//     console.log("Too big");
//  }
// }
/*
let temp ;


    document.getElementById("submit").onclick = function () {
        temp = document.getElementById("input").value;
        let ccheck = document.getElementById("cbutton").checked;
        let fcheck = document.getElementById("fbutton").checked;
        

        if (ccheck) {
            temp = Number(temp)
            let newTemp = celConvert(temp);
            document.getElementById("result").innerHTML = newTemp + "C";

        } else if (fcheck) {
            let newTemp = fehConvert(temp);
            document.getElementById("result").innerHTML = newTemp + "F";

        }else{
            document.getElementById("result").innerHTML = "Please select a button";

          
        }
        
    }

    function celConvert(temp) {
        return (temp - 32) * (5/9);

    }
    function fehConvert(temp) {
        return temp  * (9/5) + 32;
    }
*/

let fruits = ["orange", "apple", "mango"];
fruits.push("pawpaw");
fruits.pop();
fruits.shift();
fruits.unshift("lemon");
console.log(fruits);
