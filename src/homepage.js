const content = document.querySelector("#content");

function homepageInit(){
    const mainText = document.createElement("div");
    const heading = document.createElement("h1");
    heading.textContent = "Sanji's Kitchen";

    mainText.appendChild(heading);
    content.appendChild(mainText);
}

export {homepageInit};