import quotePanel from "./quote-panel/quote-panel.js";

const pageContent = () => {
    const content = document.querySelector(".content");

    const quote1 = quotePanel();
    quote1.textContent = "quote 1 placeholder text";
    content.appendChild(quote1);

    const quote2 = quotePanel();
    quote2.textContent = "quote 2 placeholder text";
    content.appendChild(quote2);

    const quote3 = quotePanel();
    quote3.textContent = "quote 3 placeholder text";
    content.appendChild(quote3);

    console.log(content);
};
export default pageContent;
