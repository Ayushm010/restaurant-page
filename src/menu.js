export function menuInit(){
    const content = document.querySelector("#content");
    content.textContent = " ";
    const mainText = document.createElement("div");
    mainText.classList.add("main-text");

     const StaterItems = document.createElement("h2");
    StaterItems.textContent = "Stater Items";
    infoBlock.appendChild(StaterItems);

    const itemList = document.createElement("ul");
    const items = [
       "Golgappa","Papdi Chaat","Chicken 65","Chicken Lollipop","Chicken Tikka"
    ];

    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        itemList.appendChild(li);
    });

  content.appendChild(StaterItems);
  content.appendChild(itemList);

}