import quotePanel, {
    quotePanelUpdateQuoteText,
    quotePanelUpdateAuthor,
} from "./quote-panel/quote-panel.js";

const pageContent = () => {
    const content = document.querySelector(".content");

    const openingLine = document.createElement("div");
    openingLine.classList.add("opening-line");
    openingLine.textContent =
        "Established in 1974 by two brothers looking to bring world-class food to the area, Baker's Dozen has been producing quality baked goods for decades. We use only fresh, locally-sourced ingredients to provide unmatched taste for an affordable price. Check out our menu and see what all the fuss is about.";
    content.appendChild(openingLine);

    const quoteContainer = document.createElement("div");
    quoteContainer.classList.add("quote-container");
    content.appendChild(quoteContainer);

    const quote1 = quotePanel();
    quotePanelUpdateQuoteText(
        quote1,
        '"Baker\'s Dozen has been the go-to spot for our family for over 20 years. We always feel so welcomed by the staff and owners and the food is fantastic."'
    );
    quotePanelUpdateAuthor(quote1, "Janet Smith");
    quoteContainer.appendChild(quote1);

    const quote2 = quotePanel();
    quotePanelUpdateQuoteText(
        quote2,
        '"If someone were to ask me: "Where is the best bakery in town?", I\'d tell them it was here. Baker\'s Dozen has been making the same high-quality goods for decades."'
    );
    quotePanelUpdateAuthor(quote2, "Thomas Lee");
    quoteContainer.appendChild(quote2);

    const quote3 = quotePanel();
    quotePanelUpdateQuoteText(
        quote3,
        '"Every weekend I bring my kids to this bakery as a treat. It absolutely makes their day - they love the food here."'
    );
    quotePanelUpdateAuthor(quote3, "Simon Miller");
    quoteContainer.appendChild(quote3);
};
export default pageContent;
