import { buildTable } from "./table.js";
import { buildGallery, reloadImages } from "./gallery.js";

document.addEventListener("DOMContentLoaded", () => {
    buildTable();
    buildGallery();

    document.getElementById("reload-btn")
        .addEventListener("click", reloadImages);

    setInterval(reloadImages, 10000);
});
