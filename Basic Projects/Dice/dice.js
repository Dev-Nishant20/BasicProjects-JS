// we generated a random number between 1-6
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

// we assigned the random number with a dice 
let randomImage = "dice" + randomNumber1 + ".png"; // dice3.png 

//let add the source for the images for all the images
let imageSource =  "images/" + randomImage; // images/dice3.png

//here [0] is the index of 
 document.querySelectorAll("img")[0].setAttribute("src", imageSource)

 //for second image


let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImage2 = "dice" + randomNumber2 + ".png";

let imageSource2 =  "images/" + randomImage2;

document.querySelectorAll("img")[1].setAttribute("src", imageSource2)

//check the winner

if(randomNumber1> randomNumber2){
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!"
}else if(randomNumber1< randomNumber2) {
    document.querySelector("h1").innerHTML = '🏆 Player 2 Wins!'
}else{
    document.querySelector("h1").innerHTML = "🚩Draw!"
}




