import headerNavButton from "./header-nav-button.js";

const pageHeader = () => {
    const header = document.querySelector(".header");

    const companyName = document.createElement("h1");
    companyName.classList.add("company-name");
    companyName.textContent = "Baker's Dozen";
    header.appendChild(companyName);

    const buttonHome = headerNavButton();
    companyName.classList.add("nav-button-home");
    companyName.textContent = "Home";
    header.appendChild(buttonHome);
};
export default pageHeader;
