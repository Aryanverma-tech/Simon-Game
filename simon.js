let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];    // FOR CALL A RANDOM INDEX WITH COLOR



let started=false;
let level=0;
let h2=document.querySelector("h2");               // CHANGE THE TEXT

document.addEventListener("keypress", function (){  // STEP 1 START THE GAME
   if(started==false){    
       console.log("game is started");
       started=true;
       levelup();                                    // CALL UPGRADE FUNCTION
   }
});
function levelup(){                        //  STEP 2 PART(A) UPGRADE
   userSeq=[];
   level++;
   h2.innerText=`Level ${level}`;                                         // CHANGE THE TEXT
   let randIdx=Math.floor(Math.random()*3); // random index
   let randcolor=btns[randIdx];        // random color       
   let randbtn=document.querySelector(`.${randcolor}`); // call a randomc color
   //console.log(randIdx);
   //console.log(randcolor);
   //console.log(randbtn);

   gameSeq.push(randcolor);
   console.log(gameSeq);
   gameflash(randbtn);                             //  STEP 2 PART (B)

}
function gameflash(btn){                       //  STEP 2 PART (B) - BTN CHANGES
   btn.classList.add("flash");                  // add a new function with the classList.add   
   setTimeout(function() {
       btn.classList.remove("flash");
   

   },400);

}
function userflash(btn){                             // STEP 3   WRITE FOR USER CLICK
   btn.classList.add("userflash");
   setTimeout(function() {
       btn.classList.remove("userflash");
   

   },400);
}
function checkans(idx){
   // console.log("cur level :" ,level);
   
   if (userSeq[idx]===gameSeq[idx]){
       console.log("same value");
       if(userSeq.length==gameSeq.length){
         setTimeout(levelup(),700);
       }

   }else{
       h2.innerHTML=`game over! Your score was<b>${level}</b> <br> Press any key to start again`;
      document.querySelector("body").style.background = "red";
      setTimeout(function() {
       document.querySelector("body").style.background = "white";
      },150);
       reset();
   }

}

function btnpress(){    // SELF RUN                                        // CALL OUR USER CLICK FUNCTION
   // console.log(this);
   let btn=this;
   userflash(btn);
   userColor= btn.getAttribute("id");
   userSeq.push(userColor);
   //console.log(userColor);
   checkans(userSeq.length-1);

}
let allbtns=document.querySelectorAll(".btn");   // SELF RUN 
for(btn of allbtns){
   btn.addEventListener("click",btnpress);

}
function reset(){
   started=false;
   gameSeq=[];
   userSeq=[];
   level=0;
}

