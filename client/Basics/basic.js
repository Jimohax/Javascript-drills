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

// let fruits = ["orange", "apple", "mango", "banana"];
// fruits.push("pawpaw");
// fruits.pop();
// fruits.shift();
// fruits.unshift("lemon");
//  fruits = fruits.sort().reverse();
//  for(let fruit of fruits){

//      console.log(fruit);
//  }

// numbers = [1, 2,3,4,5,6]
// for(let num of numbers){
//     let newResult = squarenum(num);
//     console.log(newResult);
// }

// function squarenum(element) {
//     return Math.pow(element, 2);
// }

// let result = squarenum(5);

// numbers = [1, 2,3,4,5,6];
// let result = numbers.map(squarenum);

// result.forEach(printo);

// function squarenum(element) {
//     return Math.pow(element, 2);
// }

// console.log(result);

// function printo(element){
//     console.log(element);
// }

// numbers = [1, 12,31,4,15,6];

// result = numbers.forEach(squarenum);
// console.log(result);

// function squarenum(element) {
//     return Math.pow(element, 2);
// }

// let total = numbers.reduce(cost)
// console.log(total);

// function cost(total, element) {
//     return total + element
// }
// console.log(numbers.reduce(cost))

//    numbers.sort((a,b)=>a-b);
//    descend= numbers.sort((a,b)=>b-a);
//    descend.forEach((x)=>console.log(x));

// let cards = ["A", "2", "3", "K", "Q", "J"];

//      console.log(shuffle(cards));

//   cards.forEach((x)=> console.log(x));

// function shuffle(array){

//     let mp = array.length;

//     while(mp !=0){
//         rp = Math.floor(Math.random() * array.length);
//         mp -= 1;

//         let mpi = array[mp];
//         array[mp] = array[rp];
//         array[rp] = mpi;
//     }
//     return array;

// }

// console.log(mpi);
// console.log("hey");
/*
class Animal {
	alive = true;
	eat() {
		console.log(`this ${this.name} can eat`);
	}
	sleep() {
		console.log(`this ${this.name} can sleep`);
	}
    constructor(type, age, color){
        this.type = type;
        this.age = age;
        this.color = color;
}
}

class Bird extends Animal {
	name = "bird";
	
         constructor( type, age, color, speed, ){
        super(type,age,color);
        this.speed = speed;
        }
                
   
    fly() {
		console.log(`this ${this.name} can fly`);
	}
}
class Fish extends Animal {
	name = "fish";
    constructor( type, age, color, speed, ){
        super(type,age,color);
        
        this.speed = speed;
        }
	swim() {
		console.log(`this ${this.name} can swim`);
	}
}
class Mammals extends Animal {
	name = "mammal";
    constructor( type, age, color, speed){
        super(type,age,color);
        this.speed = speed;
        }
	run() {
		console.log(`this ${this.name} can run`);
	}
}



const fish1 = new Fish('shark',3,'blue','20m/s');
const fish2 = new Fish('catfish',1,'brown','5m/s');
const bird1 = new Bird('hawk', 2,'white','50m/s');
const bird2 = new Bird('hen', 1, 'white', '1m/s');
const mammal1 = new Mammals('dog', 1, 'black', '20m/s');
const mammal2 = new Mammals('monkey', 1, 'brown', '10m/s');

changeColor(mammal1, 'white');
getAnimal(mammal1);

function getAnimal(animal) {
    console.log(animal.alive);
    console.log(animal.type);
    console.log(animal.color);
    // animal.fly();
    // animal.swim();
    animal.run();   
    
}
function changeColor(animal, color){
    animal.color = color
}





// const bird1 = new Bird('hawk', 3, 'white', 50);

// console.log(bird1.name);
// console.log(bird1.color);
// bird1.fly();
*/

/*
setInterval(update, 1000);
// timing(date)

function update(){
    let date = new Date();
    
    document.getElementById("time").innerHTML = timing(date);
   
    
    function timing(date) {
        let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let amPm = hour >= 12? "Pm" : "Am";
    hour = hour % 12 || 12;

    hour = addZeros(hour);
    min = addZeros(min);
    sec = addZeros(sec);
    
   return `${hour}: ${min}: ${sec} ${amPm}`;
    }
    
    function addZeros(time){
        time = time.toString();
       return  time.length < 2? "0" + time : time
    }
}
*/
/*
document.addEventListener("keydown", move);

let x=0;
let y=0;
let div =document.getElementById("div");
function move(event) {

    switch (event.key) {
        case "ArrowDown":
            y +=5;
            div.style.top = y + "px";
            break;
        case "ArrowUp": 
                y -=5;
                div.style.top = y + "px";
                break;
        case "ArrowLeft":
                x +=5;
                div.style.right = x + "px";
                break;
        case "ArrowRight":
            x -=5;
            div.style.right = x + "px";
            break;
        default:
            break;
    }
}
*/

/*
let start = document.getElementById("button");
start.addEventListener("click", move);

function move() {
    let x= 0;
    let y=0;
    let degrees = 0;
    let div = document.getElementById("div");
    let motion =setInterval(moving, 5);

   
    function moving() {
        if(degrees >= 360){
            clearInterval(motion);
        }else{
            degrees += 2;
            div.style.transform = "rotateZ("+degrees+"deg)";
        }
    }

}
*/


// setInterval(update, 75);

/*

let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");
let timeDisplay = document.querySelector("timeDisplay")

let secs =0;
let mins = 0;
let hrs = 0;
let paused = true;
let startTime = 0;
let elapsedTime = 0;


// start.addEventListener("click", ()=>{
//     if(paused){
//         paused = false;
//         startTime = Date.now() - elapsedTime;
//         intervalId = setInterval(update, 75);
//     }
// })

// update();


function update(){
     secs =  Math.floor(Date.now()/ 1000) % 60;
     mins =  Math.floor(Date.now()/ (1000 * 60)) % 60;
     hrs =  Math.floor(Date.now()/ (1000 * 60 * 60 )) % 60;
    
     timeDisplay.textContent = `${hrs} : ${mins} : ${secs}`
     
}

// console.log(hrs);*/

document.querySelector(".timeDisplay").textContent = "Hello boy"