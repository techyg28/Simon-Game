let started = false;
let level=0;
let btns = ["red","green","yellow","purple"];
let gameSeq=[];
let userSeq=[];

document.addEventListener("keypress",()=>{
    if(started===false) {
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },250);
}

function levelUp() {
    userSeq =[];
    level++;
    let h2obj = document.querySelector('h2');
    h2obj.innerHTML = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    gameSeq.push(randColor);
    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
}
function check(idx) {
    if(gameSeq[idx]===userSeq[idx]) {
        if(gameSeq.length === userSeq.length)
            setTimeout(levelUp,1000);
    }
    else {
        let h2obj = document.querySelector('h2');
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(()=>{document.querySelector('body').style.backgroundColor="white";},250);
        h2obj.innerHTML = `Game Over !! Your score is <b>${level}</b> <br> Press any key to restart......`;
        reset();
    }
}

function btnPress() {
    let btn=this;
    userFlash(btn);
    let color = btn.getAttribute('id');
    userSeq.push(color);
    check(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns)
    btn.addEventListener("click",btnPress);

function reset() {
    level=0;
    started=false;
    userSeq=[];
    gameSeq=[]; }