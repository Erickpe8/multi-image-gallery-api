import { buildTable } from "./table.js";
import { buildGallery, reloadImages } from "./gallery.js";

document.addEventListener("DOMContentLoaded", () => {

    buildTable();
    buildGallery();

    const btn = document.getElementById("reload-btn");
    if (btn) {
        btn.addEventListener("click", reloadImages);
    }

    setInterval(() => {
        console.log(" Actualizando imágenes...");
        reloadImages();
    }, 10000);
});
