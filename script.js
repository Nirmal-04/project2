let action=document.querySelector(".menubar i");
let active=document.querySelector(".navlist");
let mode=document.querySelector(".icon");
let darkbox=document.querySelector(".dark");
let bground=document.querySelector("body");
action.addEventListener("click",()=>{
    active.classList.toggle("add");
});
mode.addEventListener("click",()=>{
    mode.classList.toggle("darkmode");
    darkbox.classList.toggle("changecolor");
    bground.classList.toggle("bg");
})