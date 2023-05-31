const imagePanel = (img, classes = []) => {
    const panelImage = document.createElement("div");
    panelImage.classList.add("image-panel");
    classes.forEach((cls) => {
        panelImage.classList.add(cls);
    });
    panelImage.style.backgroundImage = `url(${img})`;

    return panelImage;
};
const changeimagePanelImage = (e, img) => {
    e.style.backgroundImage = img;
};
const imagePanelOffsetImage = (e, pos) => {
    e.style.backgroundPosition = pos;
};
export default imagePanel;
export { changeimagePanelImage, imagePanelOffsetImage };
