
//get element for score bord and start menu;
let start = document.querySelector(".start");
let score = document.querySelector(".score");

//get element for massege
let gameWin = document.querySelector(".game-win");

//get all mole by ussing there id;
let mole1 = document.getElementById("mole1");
let mole2 = document.getElementById("mole2");
let mole3 = document.getElementById("mole3");
let mole4 = document.getElementById("mole4");
let mole5 = document.getElementById("mole5");
let mole6 = document.getElementById("mole6");
let mole7 = document.getElementById("mole7");
let mole8 = document.getElementById("mole8");
let mole9 = document.getElementById("mole9");


//add all mole in one array;
let moles = [mole1, mole2, mole3, mole4, mole5, mole6, mole7, mole8, mole9]; 

//some variable for other factor;
let random;
let moleVisible;
let count = 0;
let gameInterval

//add start function for start the game;
start.addEventListener("click", () => {
    count = 0;
    score.innerText = `score : ${count}`;

// Hide all moles initially;
moles.forEach(mole => mole.style.visibility = 'hidden');

clearInterval(gameInterval);

gameInterval = setInterval(() => {
    // Hide all moles before showing a new one;getElementById
    moles.forEach(mole => mole.style.visibility = 'hidden');

    // Random number from 0 to 5;                   
    random = Math.floor(Math.random() * 9); 
    
    // Get the corresponding mole element;
    moleVisible = moles[random]; 

    // Show the selected mole;
    moleVisible.style.visibility = 'visible'; 
}, 800);
})


//for all mole add click event and incres score by using the countPluse function; 
mole1.addEventListener("click",() => {
    countPlus()
    mole1.style.visibility = 'hidden';
} )

mole2.addEventListener("click",() => {
    countPlus()
    mole2.style.visibility = 'hidden';
} )

mole3.addEventListener("click",() => {
    countPlus()
    mole3.style.visibility = 'hidden';
} )

mole4.addEventListener("click",() => {
    countPlus()
    mole4.style.visibility = 'hidden';
} )

mole5.addEventListener("click",() => {
    countPlus()
    mole5.style.visibility = 'hidden';
} )

mole6.addEventListener("click",() => {
    countPlus()
    mole6.style.visibility = 'hidden';
} )
mole7.addEventListener("click",() => {
    countPlus()
    mole7.style.visibility = 'hidden';
} )

mole8.addEventListener("click",() => {
    countPlus()
    mole8.style.visibility = 'hidden';
} )

mole9.addEventListener("click",() => {
    countPlus()
    mole9.style.visibility = 'hidden';
} )



//a function for the make score bord working at rream time;
let countPlus = () =>{
    count++;
    //for stop game when game is complate
    if(count == 20){
        gameWin.innerText = "game complate";
        clearInterval(gameInterval);
    }
    score.innerText = `score : ${count}`;
}