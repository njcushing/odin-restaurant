import quotePanel, {
    quotePanelUpdateQuoteText,
} from "./quote-panel/quote-panel.js";

const pageContent = () => {
    const content = document.querySelector(".content");

    const quote1 = quotePanel();
    quotePanelUpdateQuoteText(quote1, "quote 1 placeholder text");
    content.appendChild(quote1);

    const quote2 = quotePanel();
    quotePanelUpdateQuoteText(quote2, "quote 2 placeholder text");
    content.appendChild(quote2);

    const quote3 = quotePanel();
    quotePanelUpdateQuoteText(quote3, "quote 3 placeholder text");
    content.appendChild(quote3);

    console.log(content);
};
export default pageContent;
