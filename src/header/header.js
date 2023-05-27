const pageLoad = () => {
    const header = document.querySelector(".header");
    header.style.boxShadow = "6px 6px 5px rgba(60, 60, 60, 0.3)";

    const companyName = document.createElement("h1");
    companyName.classList.add("test");
    companyName.textContent = "Baker's Dozen";
    companyName.style.textAlign = "center";
    companyName.style.fontSize = "1.8rem";
    companyName.style.color = "white";
    header.appendChild(companyName);
};
export default pageLoad;
