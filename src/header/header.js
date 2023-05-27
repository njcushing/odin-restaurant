import headerNavButton from "./header-nav-button.js";

const pageHeader = () => {
    const header = document.querySelector(".header");
    header.style.display = "grid";
    header.style.gridTemplateAreas = "repeat(2, auto) / 1fr";
    header.style.backgroundColor = "rgb(230, 6, 6)";
    header.style.boxShadow = "6px 6px 5px rgba(60, 60, 60, 0.3)";

    const companyName = document.createElement("h1");
    companyName.classList.add("test");
    companyName.textContent = "Baker's Dozen";
    companyName.style.textAlign = "center";
    companyName.style.fontSize = "1.8rem";
    companyName.style.color = "white";
    header.appendChild(companyName);
};
export default pageHeader;
