const quotePanel = (panelQuote, panelAuthor, classes = []) => {
    const e = document.createElement("div");
    e.classList.add("quote-panel");
    classes.forEach((cls) => {
        e.classList.add(cls);
    });

    const quote = document.createElement("div");
    quote.classList.add("quote-panel-quote");
    e.appendChild(quote);
    const setQuote = (quoteString) => {
        quote.textContent = `${quoteString}`;
    };
    setQuote(panelQuote);

    const author = document.createElement("div");
    author.classList.add("quote-panel-author");
    e.appendChild(author);
    const setAuthor = (authorString) => {
        author.textContent = `${authorString}`;
    };
    setAuthor(panelAuthor);

    return {
        e,
        setQuote,
        setAuthor,
    };
};
export default quotePanel;
