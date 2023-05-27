const pageLayout = () => {
    const content = document.querySelector("#content");
    content.style.display = "grid";
    content.style.gridTemplateAreas = "auto 1fr / auto 1fr";

    const header = document.createElement("div");
    header.classList.add("header");
    header.style.gridArea = "1 / 1 / 2 / -1";
    content.appendChild(header);

    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    sidebar.style.gridArea = "2 / 1 / -1 / 2";
    content.appendChild(sidebar);

    const main = document.createElement("div");
    main.classList.add("main");
    main.style.gridArea = "2 / 2 / -1 / -1";
    content.appendChild(main);
};
export default pageLayout;
