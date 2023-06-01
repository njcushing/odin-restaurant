import headerNavButton from "./header-nav-button.js";
import contentHome from "./../content/content-home.js";
import contentMenu from "./../content/content-menu.js";
import contentContact from "./../content/content-contact.js";

let navButtons = [];
let currentTab = 2;

const drawHeader = () => {
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

    createNavButtons();

    navButtons.forEach((button) => {
        navBar.appendChild(button.button);
    });
};
const createNavButtons = () => {
    navButtons.push({
        button: headerNavButton("Home", ["nav-button-home"], contentHome),
        content: contentHome(),
    });
    navButtons.push({
        button: headerNavButton("Menu", ["nav-button-menu"]),
        content: contentMenu(),
    });
    navButtons.push({
        button: headerNavButton("Contact", ["nav-button-contact"]),
        content: contentContact(),
    });

    for (let i = 0; i < navButtons.length; i++) {
        navButtons[i].button.addEventListener("click", () =>
            navButtonClicked(i)
        );
    }

    updateNavButtons();
    drawContent();
};
const navButtonClicked = (index) => {
    if (index < navButtons.length && index != currentTab) {
        navButtons[index].button.classList.add("current");
        clearContent();
        currentTab = index;
        updateNavButtons();
        drawContent();
    }
};
const clearContent = () => {
    navButtons[currentTab].content.clear();
};
const updateNavButtons = () => {
    navButtons.forEach((button) => {
        button.button.classList.remove("current");
    });
    navButtons[currentTab].button.classList.add("current");
};
const drawContent = () => {
    navButtons[currentTab].content.draw();
};
export default drawHeader;
export { currentTab };
