export function homepageInit(){
    const content = document.querySelector("#content");
    const mainText = document.createElement("div");
    mainText.classList.add("main-text");

    const heading = document.createElement("h1");
    heading.textContent = "Sanji's Kitchen";

    mainText.appendChild(heading);
    content.appendChild(mainText);

    const infoBlock = document.createElement("div");
    infoBlock.classList.add("info-block");

    const info = document.createElement("p");
    info.textContent = "Sanji’s Kitchen – Led by master chef Vinsmoke Sanji, our kitchen serves up Grand Line–worthy flavors with elegance, passion, and fresh, top-quality ingredients. Every plate is a promise: you’ll never leave hungry.";
    infoBlock.appendChild(info);
    content.appendChild(infoBlock);
  
    
}