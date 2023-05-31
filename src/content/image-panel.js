const imagePanel = (img, classes = []) => {
    const e = document.createElement("div");
    e.classList.add("image-panel");
    classes.forEach((cls) => {
        e.classList.add(cls);
    });
    const setImage = (image) => {
        e.style.backgroundImage = `url(${image})`;
    };
    setImage(img);

    const setOffset = (offset) => {
        e.style.backgroundPosition = offset;
    };

    return {
        e,
        setImage,
        setOffset,
    };
};
export default imagePanel;
