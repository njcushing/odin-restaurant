const quotePanel = () => {
    const panel = document.createElement("div");
    panel.classList.add("quote-panel");

    const quote = document.createElement("div");
    quote.classList.add("quote-panel-quote");
    panel.appendChild(quote);

    return panel;
};
const quotePanelUpdateQuoteText = (e, text) => {
    e.childNodes[0].textContent = text;
};
export default quotePanel;
export { quotePanelUpdateQuoteText };
