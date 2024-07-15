let compscore=0;
let userscore=0;

let options= document.querySelectorAll(".choice");
let winner= document.querySelector(".winnermsg");
let winnerscore= document.querySelector("#player");
let loserscore= document.querySelector("#computer");
let userwin= 0;

options.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice= choice.getAttribute("id");
        playgame(userchoice);
        
    })
})

let showwinner=(userwin, userchoice, compchoice)=>{
    
    if(userwin===true){
        winner.style.backgroundColor="Green";
        winner.innerText=`Your ${userchoice} won to ${compchoice}`;
        userscore++;
        winnerscore.innerText=userscore;
        winner.style.color= "White";
        
    }
    else{
        winner.innerText=`Your ${userchoice} lost to ${compchoice}`;
        compscore++;
        loserscore.innerText=compscore;
        winner.style.backgroundColor="Red";
        winner.style.color= "White";
    }
}

let playgame= (userchoice)=>{
    console.log("Userchoice=",userchoice);
    let compchoice= computerchoice();
    console.log("ComputerChoice=",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }

    // For Rock,Paper,Scissor Choice
    else{
        
        if(userchoice === "rock" && compchoice === "paper"){
            console.log("Computer wins");
            userwin=false;
        }
        else if (userchoice === "rock" && compchoice === "scissor"){
            console.log("Player Wins");
            userwin= true;
        }

        else if (userchoice === "scissor" && compchoice === "rock"){
            console.log("Computer Wins");
            userwin=false;
        }

        else if (userchoice === "scissor" && compchoice === "paper"){
            console.log("Player Wins");
            userwin= true;
        }  
        
        else if (userchoice === "paper" && compchoice === "scissor"){
            console.log("Computer Wins");
            userwin=false;
        }
        
        else if (userchoice === "paper" && compchoice === "rock"){
            console.log("Player Wins");
            userwin= true;
        }    
        showwinner(userwin, userchoice, compchoice);
             
    }


} 

let computerchoice=()=>{
    let choice=["rock","paper","scissor"];
    let computerchoice=Math.floor(Math.random()*3);
    return choice[computerchoice];
}

let drawgame= ()=>{
    console.log("Game is Drawn");
    winner.innerText="Game is Drawn";
    winner.style.backgroundColor="White";
    winner.style.color="Black";
}



