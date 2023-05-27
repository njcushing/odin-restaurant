import pageLayout from "./layout/layout.js";
import pageHeader from "./header/header.js";
import pageContent from "./content/content.js";
import "./styles.css";

const regenerateTab = () => {
    pageLayout();
    pageHeader();
    pageContent();
};
regenerateTab();
