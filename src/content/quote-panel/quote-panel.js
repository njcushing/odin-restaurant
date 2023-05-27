const quotePanel = () => {
    const panel = document.createElement("div");
    panel.classList.add("quote-panel");
    return panel;
};
const quotePanelUpdateQuoteText = (e, text) => {
    e.textContent = text;
};
export default quotePanel;
export { quotePanelUpdateQuoteText };
