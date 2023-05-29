const homepageImagePanel = (img) => {
    const panel = document.createElement("img");
    panel.classList.add("homepage-image-panel");
    panel.setAttribute("src", img);

    return panel;
};
const changeHomepageImagePanelImage = (e, img) => {
    e.setAttribute("src", img);
};
export default homepageImagePanel;
export { changeHomepageImagePanelImage };
