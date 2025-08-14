export function menuInit() {
    // Select the main content container and clears previous content   
    const content = document.querySelector("#content");
    content.textContent = " ";

    // Create a container for the main heading text
    const mainText = document.createElement("div");
    mainText.classList.add("main-text");

    // Create and add the main heading
    const heading = document.createElement("h1");
    heading.textContent = "MENU";
    mainText.appendChild(heading);
    content.appendChild(mainText);
  
    // Create a container for menu items
    const infoBlock = document.createElement("div");
    infoBlock.classList.add("info-block");
    const info = document.createElement("p");
    info.textContent ="From spicy street-food starters to rich, flavorful main courses and refreshing drinks, every dish at Sanji’s Restaurant is prepared with fresh ingredients and a touch of Grand Line flair.";
   infoBlock.appendChild(info);
   
    // Add section title for starter items
    // Starter Items
    const starterItems = document.createElement("h2");
    starterItems.textContent = "Starter Items";
    infoBlock.appendChild(starterItems);

    const starterList = document.createElement("ul");
    const starters = [
        "Golgappa", "Papdi Chaat", "Chicken 65", "Chicken Lollipop", "Chicken Tikka"
    ];

    starters.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        starterList.appendChild(li);
    });
    infoBlock.appendChild(starterList);

    // Main Course
    const mainCourseHeading = document.createElement("h2");
    mainCourseHeading.textContent = "Main Course";
    infoBlock.appendChild(mainCourseHeading);

    const mainCourseList = document.createElement("ul");
    const mainCourseItems = [
        "Butter Chicken", "Paneer Butter Masala", "Mutton Rogan Josh", "Veg Biryani", "Fish Curry"
    ];

    mainCourseItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        mainCourseList.appendChild(li);
    });
    infoBlock.appendChild(mainCourseList);

    // Drinks
    const drinksHeading = document.createElement("h2");
    drinksHeading.textContent = "Drinks";
    infoBlock.appendChild(drinksHeading);

    const drinksList = document.createElement("ul");
    const drinks = [
        "Mango Lassi", "Masala Chai", "Cold Coffee", "Coconut Water", "Fresh Lime Soda"
    ];

    drinks.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        drinksList.appendChild(li);
    });
    infoBlock.appendChild(drinksList);

    content.appendChild(infoBlock);

}
