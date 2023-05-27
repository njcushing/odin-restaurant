const pageLayout = () => {
    const content = document.createElement("div");
    content.id = "#content";
    document.body.appendChild(content);

    const header = document.createElement("div");
    header.classList.add("header");
    content.appendChild(header);

    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    content.appendChild(sidebar);

    const main = document.createElement("div");
    main.classList.add("main");
    content.appendChild(main);
};
export default pageLayout;
