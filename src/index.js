import "./style.css";
import { homepageInit } from "./homepage";
import { menuInit } from "./menu";
import { aboutInit } from "./about";


const btnOne = document.querySelector("#btn-1");
btnOne.addEventListener("click",()=>{
    homepageInit();
});

const btnTwo  = document.querySelector("#btn-2");
btnTwo.addEventListener("click",()=>{
    menuInit();
});
const btnThree = document.querySelector("#btn-3");
btnThree.addEventListener("click",()=>{
    aboutInit();
});

homepageInit();