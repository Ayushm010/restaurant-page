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
    info.textContent = "At Sanji’s Restaurant, every meal is an experience. Led by the legendary Vinsmoke Sanji, we bring flavors from across the Grand Line to your plate. From fresh seafood to gourmet specialties, each dish is made with passion, elegance, and the promise that no guest leaves hungry."; 
     infoBlock.appendChild(info);

    const contact = document.createElement("h2");
    contact.textContent = "Contact Us";
    infoBlock.appendChild(contact);

   

    const contactList = document.createElement("ul");

    const contacts = [
        "📍 Address: Going Merry(East Blue)",
        "📞 Phone: [Your Number Here]",
        "📧 Email: [Your Email Here]"
    ];

   
    contacts.forEach(contact => {
        const li = document.createElement("li");
        li.textContent = contact;
        contactList.appendChild(li);
    });
    
    infoBlock.appendChild(contactList);

    content.appendChild(infoBlock);

}