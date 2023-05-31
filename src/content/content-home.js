import quotePanel from "./quote-panel.js";
import imagePanel from "./image-panel.js";
import cinnamonRolls from "./../img/beth-macdonald-V6LEV6CBVLw-unsplash.jpg";
import croissants from "./../img/conor-brown-sqkXyyj4WdE-unsplash.jpg";
import cheesecake from "./../img/waranya-mooldee-TB0Ao4CQRqc-unsplash.jpg";
import "./content-home-styles.css";

const imagePanelClasses = ["homepage-image-panel"];

const pageContentHome = () => {
    const content = document.querySelector(".content");

    const openingLine = document.createElement("div");
    openingLine.classList.add("opening-line");
    openingLine.textContent =
        "Established in 1974 by two brothers looking to bring world-class food to the area, Baker's Dozen has been producing quality baked goods for decades. We use only fresh, locally-sourced ingredients to provide unmatched taste for an affordable price. Check out our menu and see what all the fuss is about.";
    content.appendChild(openingLine);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    content.appendChild(imageContainer);

    const image1 = imagePanel(cinnamonRolls);
    imageContainer.appendChild(image1.e);

    const image2 = imagePanel(croissants);
    imageContainer.appendChild(image2.e);

    const image3 = imagePanel(cheesecake);
    image3.setOffset("bottom 44% right 50%");
    imageContainer.appendChild(image3.e);

    const quoteContainer = document.createElement("div");
    quoteContainer.classList.add("quote-container");
    content.appendChild(quoteContainer);

    const quote1 = quotePanel(
        '"Baker\'s Dozen has been the go-to spot for our family for over 20 years. We always feel so welcomed by the staff and owners and the food is fantastic."',
        "Janet Smith"
    );
    quoteContainer.appendChild(quote1.e);

    const quote2 = quotePanel(
        '"If someone were to ask me: "Where is the best bakery in town?", I\'d tell them it was here. Baker\'s Dozen has been making the same great food since I moved to the area 20 years ago."',
        "Thomas Lee"
    );
    quoteContainer.appendChild(quote2.e);

    const quote3 = quotePanel(
        '"Every weekend I bring my kids to this bakery as a treat. It absolutely makes their day - they love the food here."',
        "Simon Miller"
    );
    quoteContainer.appendChild(quote3.e);
};
export default pageContentHome;
