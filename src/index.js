import pageLayout from "./layout/layout.js";
import pageHeader from "./header/header.js";
import pageContentHome from "./content/content-home.js";
import pageContentMenu from "./content/content-menu.js";
import pageContentContact from "./content/content-contact.js";
import "./styles.css";

let currentPage = 0;

const regenerateTab = () => {
    switch (currentPage) {
        case 0:
            pageContentHome();
            break;
        case 1:
            pageContentMenu();
            break;
        case 2:
            pageContentContact();
            break;
        default:
            pageContentHome();
    }
};
pageLayout();
pageHeader();
regenerateTab();
