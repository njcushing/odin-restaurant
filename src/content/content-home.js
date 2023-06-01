import quotePanel from "./quote-panel.js";
import imagePanel from "./image-panel.js";
import cinnamonRolls from "./../img/beth-macdonald-V6LEV6CBVLw-unsplash.jpg";
import croissants from "./../img/conor-brown-sqkXyyj4WdE-unsplash.jpg";
import cheesecake from "./../img/waranya-mooldee-TB0Ao4CQRqc-unsplash.jpg";
import styles from "./content-home-styles.lazy.css";

let drawnState = false;

const contentHome = () => {
    let container;
    let openingLine;
    let imageContainer;
    let image1;
    let image2;
    let image3;
    let quoteContainer;
    let quote1;
    let quote2;
    let quote3;

    const draw = () => {
        if (drawnState) return;
        drawnState = !drawnState;

        const content = document.querySelector(".content");
        if (!content) return;

        container = document.createElement("div");
        container.classList.add("home-content-container");
        content.appendChild(container);

        openingLine = document.createElement("div");
        openingLine.classList.add("opening-line");
        openingLine.textContent =
            "Established in 1974 by two brothers looking to bring world-class food to the area, Baker's Dozen has been producing quality baked goods for decades. We use only fresh, locally-sourced ingredients to provide unmatched taste for an affordable price. Check out our menu and see what all the fuss is about.";
        container.appendChild(openingLine);

        imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");
        container.appendChild(imageContainer);

        image1 = imagePanel(
            cinnamonRolls,
            "Many baked cinnamon rolls in a tray."
        );
        imageContainer.appendChild(image1.e);

        image2 = imagePanel(
            croissants,
            "A number of buttery, flaky croissants laid out on baking paper."
        );
        imageContainer.appendChild(image2.e);

        image3 = imagePanel(
            cheesecake,
            "A slice of cheesecake with blueberries on top."
        );
        image3.setOffset("bottom 44% right 50%");
        imageContainer.appendChild(image3.e);

        quoteContainer = document.createElement("div");
        quoteContainer.classList.add("quote-container");
        container.appendChild(quoteContainer);

        quote1 = quotePanel(
            '"Baker\'s Dozen has been the go-to spot for our family for over 20 years. We always feel so welcomed by the staff and owners and the food is fantastic."',
            "Janet Smith"
        );
        quoteContainer.appendChild(quote1.e);

        quote2 = quotePanel(
            '"If someone were to ask me: "Where is the best bakery in town?", I\'d tell them it was here. Baker\'s Dozen has been making the same great food since I moved to the area 20 years ago."',
            "Thomas Lee"
        );
        quoteContainer.appendChild(quote2.e);

        quote3 = quotePanel(
            '"Every weekend I bring my kids to this bakery as a treat. It absolutely makes their day - they love the food here."',
            "Simon Miller"
        );
        quoteContainer.appendChild(quote3.e);

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
export default contentHome;
