import headerNavButton from "./header-nav-button.js";

let navButtons = [];

const pageHeader = () => {
    const header = document.querySelector(".header");

    navButtons = [];
    while (header.firstChild) {
        header.removeChild(header.lastChild);
    }

    const companyName = document.createElement("h1");
    companyName.classList.add("company-name");
    companyName.classList.add("no-select");
    companyName.textContent = "Baker's Dozen";
    header.appendChild(companyName);

    const navBar = document.createElement("nav");
    navBar.classList.add("navigation-bar");
    header.appendChild(navBar);

    navButtons.push(headerNavButton("Home", ["nav-button-home"]));
    navButtons.push(headerNavButton("Menu", ["nav-button-menu"]));
    navButtons.push(headerNavButton("Contact", ["nav-button-contact"]));

    for (let i = 0; i < navButtons.length; i++) {
        navButtons[i].addEventListener("click", () => navButtonClicked(i));
    }

    navButtons.forEach((button) => {
        navBar.appendChild(button);
    });
};
const navButtonClicked = (index) => {
    navButtons.forEach((button) => {
        button.classList.remove("current");
    });
    if (index < navButtons.length) navButtons[index].classList.add("current");
};
export default pageHeader;
