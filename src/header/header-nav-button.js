const headerNavButton = (textContent, classes) => {
    const button = document.createElement("button");
    button.classList.add("header-nav-button");
    classes.forEach((classString) => {
        button.classList.add(classString);
    });
    button.textContent = textContent;
    return button;
};
export default headerNavButton;
