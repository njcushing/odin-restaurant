import openingTimesPanel from "./opening-times-panel.js";
import styles from "./content-contact-styles.lazy.css";

let drawnState = false;

const contentContact = () => {
    let container;

    const draw = () => {
        if (drawnState) return;
        drawnState = !drawnState;

        const content = document.querySelector(".content");
        if (!content) return;

        container = document.createElement("div");
        container.classList.add("contact-content-container");
        content.appendChild(container);

        const openingTimesContainer = document.createElement("div");
        openingTimesContainer.classList.add("opening-times-container");
        container.appendChild(openingTimesContainer);

        const openingTimesTitle = document.createElement("h2");
        openingTimesTitle.classList.add("opening-times-title");
        openingTimesTitle.textContent = "Opening Times";
        openingTimesContainer.appendChild(openingTimesTitle);

        const openingTimes = openingTimesPanel();
        openingTimes.setDayTimes(0, "07:30am", "21:00pm");
        openingTimes.setDayTimes(1, "07:30am", "21:00pm");
        openingTimes.setDayTimes(2, "08:30am", "20:00pm");
        openingTimes.setDayTimes(3, "07:30am", "21:00pm");
        openingTimes.setDayTimes(4, "07:30am", "21:00pm");
        openingTimes.setDayTimes(5, "06:00am", "22:30pm");
        openingTimes.setDayTimes(6, "09:00am", "17:00pm");
        openingTimesContainer.appendChild(openingTimes.e);

        const addressContainer = document.createElement("div");
        addressContainer.classList.add("address-container");
        container.appendChild(addressContainer);

        const contactInfoContainer = document.createElement("div");
        contactInfoContainer.classList.add("contact-information-container");
        container.appendChild(contactInfoContainer);

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
export default contentContact;
