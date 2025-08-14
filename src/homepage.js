export function homepageInit() {
    // Select the main content container and clears previous content
    const content = document.querySelector("#content");
    content.textContent = " ";

    // Create a container for the main heading text
    const mainText = document.createElement("div");
    mainText.classList.add("main-text");

    // Create and add the main heading for the homepage
    const heading = document.createElement("h1");
    heading.textContent = "Sanji's Kitchen";
    mainText.appendChild(heading);
    content.appendChild(mainText);

    // Create a container for description and opening hours
    const infoBlock = document.createElement("div");
    infoBlock.classList.add("info-block");

    // Add restaurant description
    const info = document.createElement("p");
    info.textContent = "Sanji’s Kitchen – Led by master chef Vinsmoke Sanji, our kitchen serves up Grand Line–worthy flavors with elegance, passion, and fresh, top-quality ingredients. Every plate is a promise: you’ll never leave hungry.";
    infoBlock.appendChild(info);
 

    // Create heading for opening hours
    const hoursHeading = document.createElement("h2");
    hoursHeading.textContent = "Opening Hours";
    infoBlock.appendChild(hoursHeading);

    // Create a list to display each day's timings
    const timingList = document.createElement("ul");

    const timings = [
        "Monday – Friday: 10:00 AM – 10:00 PM",
        "Saturday: 9:00 AM – 11:00 PM",
        "Sunday: 9:00 AM – 9:00 PM"
    ];

   
    timings.forEach(time => {
        const li = document.createElement("li");
        li.textContent = time;
        timingList.appendChild(li);
    });

    // Add timings list to info block and attach to page
    infoBlock.appendChild(timingList);
    content.appendChild(infoBlock);
}
