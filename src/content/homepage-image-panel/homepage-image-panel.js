const homepageImagePanel = (img) => {
    const panelImage = document.createElement("div");
    panelImage.classList.add("homepage-image-panel");
    panelImage.style.backgroundImage = `url(${img})`;

    return panelImage;
};
const changeHomepageImagePanelImage = (e, img) => {
    e.style.backgroundImage = img;
};
const homepageImagePanelOffsetImage = (e, pos) => {
    e.style.backgroundPosition = pos;
};
export default homepageImagePanel;
export { changeHomepageImagePanelImage, homepageImagePanelOffsetImage };
