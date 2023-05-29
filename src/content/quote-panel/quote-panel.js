const quotePanel = () => {
    const panel = document.createElement("div");
    panel.classList.add("quote-panel");

    const quote = document.createElement("div");
    quote.classList.add("quote-panel-quote");
    panel.appendChild(quote);

    const author = document.createElement("div");
    author.classList.add("quote-panel-author");
    panel.appendChild(author);

    return panel;
};
const quotePanelUpdateQuoteText = (e, text) => {
    e.childNodes[0].textContent = text;
};
const quotePanelUpdateAuthor = (e, author) => {
    e.childNodes[1].textContent = `- ${author}`;
};
export default quotePanel;
export { quotePanelUpdateQuoteText, quotePanelUpdateAuthor };
