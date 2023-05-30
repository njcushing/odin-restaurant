import drawHeader, { currentTab } from "./../header/header.js";

const drawPage = () => {
    const page = document.createElement("div");
    page.id = "page";
    document.body.appendChild(page);

    const header = document.createElement("div");
    header.classList.add("header");
    page.appendChild(header);

    const content = document.createElement("div");
    content.classList.add("content");
    page.appendChild(content);

    drawHeader();
};
export default drawPage;
