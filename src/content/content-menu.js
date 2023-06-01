import imagePanel from "./image-panel.js";
import menuItemPanel from "./menu-item-panel.js";
import appleTart from "./../img/deborah-rainford-yISrQEZjF8s-unsplash.jpg";
import cinnamonRolls from "./../img/beth-macdonald-V6LEV6CBVLw-unsplash.jpg";
import croissants from "./../img/conor-brown-sqkXyyj4WdE-unsplash.jpg";
import cheesecake from "./../img/waranya-mooldee-TB0Ao4CQRqc-unsplash.jpg";
import chocolateMuffins from "./../img/shakti-rajpurohit-F6ajnawxySY-unsplash.jpg";
import brownies from "./../img/anna-przepiorka-LjtviHokbr4-unsplash.jpg";
import chocolateCake from "./../img/ayesha-firdaus-E8DznhhRm3k-unsplash.jpg";
import styles from "./content-menu-styles.lazy.css";

let drawnState = false;

let menu = [];
const menuItem = (panel, image) => {
    menu.push({ panel: panel, image: image });
};

const contentMenu = () => {
    let container;

    const draw = () => {
        if (drawnState) return;
        drawnState = !drawnState;

        const content = document.querySelector(".content");
        if (!content) return;

        container = document.createElement("div");
        container.classList.add("menu-content-container");
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

menuItem(
    menuItemPanel(
        "Apple Tart",
        "Baker's Dozen's pride and joy. Our staple. Our classic. Warm, tangy apples on flaky, buttery pastry. Add a scoop of ice cream for no extra charge.",
        "450",
        "270"
    ),
    imagePanel(appleTart, "An apple tart with a scoop of ice cream on top.")
);
menu[menu.length - 1].image.setOffset("bottom 60% right 50%");

menuItem(
    menuItemPanel(
        "Brownies",
        "A rich, fudgy brownie with a flaky top. What more needs to be said?",
        "480",
        "160"
    ),
    imagePanel(brownies, "A stack of chocolate brownies.")
);
menu[menu.length - 1].image.setOffset("bottom 70% right 50%");

menuItem(
    menuItemPanel(
        "Cheesecake",
        "A delicious and smooth slice of cheesecake, baked to perfection and covered in a tangy, rich blueberry sauce.",
        "340",
        "285"
    ),
    imagePanel(cheesecake, "A slice of cheesecake with blueberries on top.")
);
menu[menu.length - 1].image.setOffset("bottom 44% right 50%");

menuItem(
    menuItemPanel(
        "Chocolate Muffin",
        "A triple chocolate muffin with chocolate chips and filled with warm, melted chocolate sauce",
        "460",
        "210"
    ),
    imagePanel(chocolateMuffins, "A number of chocolate muffins in a tray.")
);
menu[menu.length - 1].image.setOffset("bottom 70% right 50%");

menuItem(
    menuItemPanel(
        "Cinnamon Roll",
        "A doughy, warm roll filled with a sweet, sugary cinnamon mixture. (Additional cinnamon sugar glaze optional.)",
        "450",
        "250"
    ),
    imagePanel(cinnamonRolls, "Many baked cinnamon rolls in a tray.")
);

menuItem(
    menuItemPanel(
        "Chocolate Cake",
        "A slice of layered chocolate cake, filled with chocolate ganache and topped with fresh fruit of your choosing.",
        "380",
        "240"
    ),
    imagePanel(
        chocolateCake,
        "A slice of chocolate cake with chocolate filling."
    )
);

menuItem(
    menuItemPanel(
        "Croissant",
        "A buttery and flaky croissant, with optional raisin or chocolate filling.",
        "410",
        "140"
    ),
    imagePanel(
        croissants,
        "A number of buttery, flaky croissants laid out on baking paper."
    )
);

export default contentMenu;
