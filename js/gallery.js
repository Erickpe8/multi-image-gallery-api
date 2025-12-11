import { apiSources } from "./api-data.js";

function getDynamicURI(api) {

    if (!api.urn.includes("RANDOM") && api.urn !== "") {
        const sep = api.urn.includes("?") ? "&" : "?";
        return api.baseUrl + api.urn + sep + "t=" + Date.now();
    }

    if (api.urn === "RANDOM_FOX") {
        const id = Math.floor(Math.random() * 123) + 1;
        return `${api.baseUrl}/${id}.jpg`;
    }

    if (api.baseUrl.includes("random-d.uk")) {
        return api.baseUrl + "?t=" + Date.now();
    }
}

export function buildGallery() {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    apiSources.forEach((api, index) => {
        const uri = getDynamicURI(api);

        const card = `
            <div class="bg-white rounded-lg shadow p-4 text-center">
                <img id="img-${index}"
                    src="${uri}"
                    class="w-[100px] h-[100px] object-cover rounded mx-auto"
                    alt="${api.name}">

                <h3 class="text-md font-semibold mt-3">${api.name}</h3>
                <p class="text-sm text-gray-600">${api.notes}</p>

                <p class="text-[11px] mt-2 text-gray-500 break-all">
                    <strong>URI:</strong> 
                    <span id="uri-${index}">${uri}</span>
                </p>
            </div>
        `;

        gallery.innerHTML += card;
    });
}

export function reloadImages() {
    apiSources.forEach((api, index) => {
        const newUri = getDynamicURI(api);

        document.getElementById(`img-${index}`).src = newUri;
        document.getElementById(`uri-${index}`).textContent = newUri;
    });
}
