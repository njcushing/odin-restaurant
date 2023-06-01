const imagePanel = (img, alt = "", classes = []) => {
    const e = document.createElement("div");
    e.setAttribute("role", "img");
    e.classList.add("image-panel");
    classes.forEach((cls) => {
        e.classList.add(cls);
    });
    const setImage = (image) => {
        e.style.backgroundImage = `url(${image})`;
    };
    setImage(img);

    const setAlt = (altString) => {
        e.setAttribute("aria-label", altString);
    };
    setAlt(alt);

    const setOffset = (offset) => {
        e.style.backgroundPosition = offset;
    };

    return {
        e,
        setImage,
        setAlt,
        setOffset,
    };
};
export default imagePanel;
