let userscore=0;
let compscore=0;

const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscoref=document.querySelector("#user-score p");
const compscoref=document.querySelector("#computer-score p");

const compchoicegen=()=>{
    const arr=["rock","paper","scissors"];
    const n=Math.floor(Math.random()*3);
    return arr[n];
}

choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");  
        const comp=compchoicegen();
        showresult(userchoice,comp)      
    })
})


const showresult=(userchoice,comp)=>{

    //draw
    if(userchoice==comp){
        msg.innerText=`Match draw choice: ${userchoice}` ;
        msg.style.backgroundColor="grey";
        return;
    }
    let userwin;

    if (userchoice === "rock") {
        userwin = comp === "scissors";
    } else if (userchoice === "paper") {
        userwin = comp === "rock";
    } else { // scissors
        userwin = comp === "paper";
    }
    if (userwin) {
        
        msg.innerText = `You win! your ${userchoice} beats ${comp}`;
        msg.style.backgroundColor = "green";
        userscore++;
        userscoref.innerHTML=userscore;
    } else {
        
        msg.innerText = `You lose! ${comp} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
        compscore++;
        compscoref.innerHTML=compscore;

    }

}