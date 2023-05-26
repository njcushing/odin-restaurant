const pageLoad = () => {
    const content = document.querySelector("#content");

    const test = document.createElement("h1");
    test.textContent = "Restaurant";
    content.appendChild(test);
};
export default pageLoad;
