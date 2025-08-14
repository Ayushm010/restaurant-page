export function aboutInit() {
    const content = document.querySelector("#content");
    content.textContent = " ";

    // Create a container for the main heading text
    const mainText = document.createElement("div");
    mainText.classList.add("main-text");

    // Create and add the main heading
    const heading = document.createElement("h1");
    heading.textContent = "About Us";
    mainText.appendChild(heading);
    content.appendChild(mainText);

    // Create a container for menu items
    const infoBlock = document.createElement("div");
    infoBlock.classList.add("info-block");
    const info = document.createElement("p");
    info.textContent = "At Sanji’s Restaurant, we believe great food is more than just a meal—it’s an experience. Helmed by the legendary chef Vinsmoke Sanji, our kitchen blends flavors from every corner of the Grand Line into dishes that delight the senses and warm the heart. From ocean-fresh seafood to gourmet specialties, every plate is crafted with elegance, passion, and the promise that no guest ever leaves hungry. Our cozy yet refined atmosphere makes it the perfect place for pirates, travelers, and locals alike to share a table and a story.                     ";
    infoBlock.appendChild(info);

    const contact = document.createElement("h2");
    contact.textContent = "Contact Us";
    infoBlock.appendChild(contact);

    const contactInfo = document.createElement("p");
    contactInfo.textContent = "Have a question, want to reserve a table, or just feel like complimenting the chef? We’d love to hear from you.";

    content.appendChild(infoBlock);

}