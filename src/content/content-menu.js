import imagePanel from "./image-panel.js";
import menuItemPanel from "./menu-item-panel.js";
import cinnamonRolls from "./../img/beth-macdonald-V6LEV6CBVLw-unsplash.jpg";
import croissants from "./../img/conor-brown-sqkXyyj4WdE-unsplash.jpg";
import cheesecake from "./../img/waranya-mooldee-TB0Ao4CQRqc-unsplash.jpg";
import styles from "./content-menu-styles.lazy.css";

let drawnState = false;

let menu = [];
const menuItem = (panel, image) => {
    menu.push({ panel: panel, image: image });
};

menuItem(
    menuItemPanel("Cheesecake", "testDesc", "340", "120"),
    imagePanel(cheesecake)
);
menu[menu.length - 1].image.setOffset("bottom 44% right 50%");
menuItem(
    menuItemPanel("Cinnamon Roll", "testDesc", "340", "120"),
    imagePanel(cinnamonRolls)
);
menuItem(
    menuItemPanel("Croissant", "testDesc", "340", "120"),
    imagePanel(croissants)
);

const contentMenu = () => {
    let container;

    const draw = () => {
        if (drawnState) return;
        drawnState = !drawnState;

        const content = document.querySelector(".content");
        if (!content) return;

        container = document.createElement("div");
        container.classList.add("menu-item-container");
        content.appendChild(container);

        for (let i = 0; i < menu.length; i++) {
            if (i % 2 === 0) {
                container.appendChild(menu[i].image.e);
                container.appendChild(menu[i].panel.e);
                continue;
            }
            container.appendChild(menu[i].panel.e);
            container.appendChild(menu[i].image.e);
        }

        content.appendChild(container);

        styles.use();
    };

    const clear = () => {
        if (!drawnState) return;
        drawnState = !drawnState;

        container.remove();

        styles.unuse();
    };

    return {
        draw,
        clear,
    };
};
export default contentMenu;
