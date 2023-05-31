const menuItemPanel = (itemName, itemDescription, itemCalories, itemPrice) => {
    const e = document.createElement("div");
    e.classList.add("menu-item-panel");

    const name = document.createElement("h2");
    name.classList.add("menu-item-panel-name");
    e.appendChild(name);
    const setName = (nameString) => {
        name.textContent = `${nameString}`;
    };
    setName(itemName);

    const description = document.createElement("div");
    description.classList.add("menu-item-panel-description");
    e.appendChild(description);
    const setDescription = (descriptionString) => {
        description.textContent = `"${descriptionString}"`;
    };
    setDescription(itemDescription);

    const calories = document.createElement("h6");
    calories.classList.add("menu-item-panel-calories");
    e.appendChild(calories);
    const setCalories = (calsString) => {
        calories.textContent = `${calsString}kcal`;
    };
    setCalories(itemCalories);

    const price = document.createElement("h3");
    price.classList.add("menu-item-panel-price");
    e.appendChild(price);
    const setPrice = (priceString) => {
        price.textContent = `£${convertPricePenceToPounds(priceString)}`;
    };
    setPrice(itemPrice);

    return {
        e,
        setName,
        setDescription,
        setCalories,
        setPrice,
    };
};
const convertPricePenceToPounds = (value) => {
    return (Math.floor(value) / 100).toFixed(2);
};
export default menuItemPanel;
