// select UI element
const p1ScoreElm = document.querySelector("#p1Score");
const p2ScoreElm = document.querySelector("#p2Score");
const inputScoreElm = document.querySelector("#inputScore");
const playingToElm = document.querySelector(".playingTo");
const p1BtnElm = document.querySelector("#p1Btn");
const p2BtnElm = document.querySelector("#p2Btn");
const resetBtnElm = document.querySelector("#resetBtn");
const formElm = document.querySelector("form");

// add eventListener in form element
formElm.addEventListener("submit",(evt)=>{
    // getting user Input
    const  inputScore = inputScoreElm.value;
       
    // showing the userInput into dom
     playingToElm.textContent = inputScore;
    
     // reset input field 
     inputScoreElm.value = "";

   evt.preventDefault();
})