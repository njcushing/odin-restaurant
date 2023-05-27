import headerNavButton from "./header-nav-button.js";

const pageHeader = () => {
    const header = document.querySelector(".header");

    const companyName = document.createElement("h1");
    companyName.classList.add("company-name");
    companyName.textContent = "Baker's Dozen";
    header.appendChild(companyName);

    const navBar = document.createElement("nav");
    navBar.classList.add("navigation-bar");
    header.appendChild(navBar);

    const buttonHome = headerNavButton();
    buttonHome.classList.add("nav-button-home");
    buttonHome.textContent = "Home";
    navBar.appendChild(buttonHome);

    const buttonMenu = headerNavButton();
    buttonMenu.classList.add("nav-button-menu");
    buttonMenu.textContent = "Menu";
    navBar.appendChild(buttonMenu);

    const buttonContact = headerNavButton();
    buttonContact.classList.add("nav-button-contact");
    buttonContact.textContent = "Contact";
    navBar.appendChild(buttonContact);
};
export default pageHeader;
