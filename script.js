let start = false;
let level = 0;
let gmSeq = [];
let userSeq = [];
let btns = ["yellow", "green", "blue", "red"];
document.addEventListener("keypress",function(){
    if (start == false) {
        let p = document.querySelector(".p");
        p.innerText = "Game Stared!";
        start = true;
        levelup();
    }
});

function btnFls(btn){
    btn.classList.add("flase");
    setTimeout(function(){
        btn.classList.remove("flase");
    },500);
}


function userFlase(btn){
    btn.classList.add("userFlase");
    setTimeout(function(){
        btn.classList.remove("userFlase");
    },500);
}

function levelup(){
    userSeq = [];
    level++;
    let glevel = document.querySelector(".level");
    glevel.innerText = "Game Level is : "+level;

    let rendIndex = Math.floor(Math.random() * 4);
    let rendColor = btns[rendIndex];
    let randBtn = document.querySelector("."+rendColor);
    gmSeq.push(rendColor);
    console.log("game : ",gmSeq);
    btnFls(randBtn);
}

function check(indx){
    // console.log(level);
    if(userSeq[indx] == gmSeq[indx]){
        // console.log("same same but diffrent");
        if (gmSeq.length == userSeq.length) {
            setTimeout(levelup, 1000)
        }
    }else{
        let levelNo = document.querySelector(".level");
        levelNo.innerText = "game over Press Any Key To Start Game";
        reset();
    }
}

function pressBtn(){
    // console.log("btn was pressed");
    let btn = this;
    userFlase(btn);
    userSeq.push(btn.classList[0])
    console.log("user : ",userSeq);
    check(userSeq.length-1);
}

let Allbtn = document.querySelectorAll(".btn");
for (const btns of Allbtn) {
    btns.addEventListener("click", pressBtn)
}

function reset(){
    start = false;
    level = 0;
    gmSeq = [];
    userSeq = [];
}