import imagePanel, {
    imagePanelChangeImage,
    imagePanelOffsetImage,
} from "./image-panel/image-panel.js";
import menuItemPanel from "./menu-item-panel/menu-item-panel.js";
import cinnamonRolls from "./../img/beth-macdonald-V6LEV6CBVLw-unsplash.jpg";
import croissants from "./../img/conor-brown-sqkXyyj4WdE-unsplash.jpg";
import cheesecake from "./../img/waranya-mooldee-TB0Ao4CQRqc-unsplash.jpg";

let menu = [];
const menuItem = (panel, image) => {
    menu.push({ panel: panel, image: image });
};

menuItem(
    menuItemPanel("Cheesecake", "testDesc", "340", "120"),
    imagePanel(cheesecake)
);

const pageContentMenu = () => {
    const content = document.querySelector(".content");

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("menu-item-container");
    content.appendChild(itemContainer);

    for (let i = 0; i < menu.length; i++) {
        if (i % 2 === 0) {
            itemContainer.appendChild(menu[i].image);
            itemContainer.appendChild(menu[i].panel.e);
            continue;
        }
        itemContainer.appendChild(menu[i].panel.e);
        itemContainer.appendChild(menu[i].image);
    }
};
export default pageContentMenu;
