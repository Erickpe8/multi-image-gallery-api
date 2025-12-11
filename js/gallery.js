import { apiSources } from "./api-data.js";

function getDynamicURI(api) {

    if (api.urn !== "" && !api.urn.includes("RANDOM")) {
        const base = api.baseUrl + api.urn;
        return base + (base.includes("?") ? "&" : "?") + "nocache=" + Date.now();
    }

    if (api.urn === "RANDOM_FOX") {
        const id = Math.floor(Math.random() * 123) + 1;

        return `${api.baseUrl}/${id}.jpg?nocache=${Date.now()}`;
    }

    if (api.baseUrl.includes("random-d.uk")) {
        return `${api.baseUrl}?nocache=${Date.now()}&rand=${Math.random()}`;
    }
}

export function buildGallery() {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    apiSources.forEach((api, index) => {
        const uri = getDynamicURI(api);

        gallery.innerHTML += `
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
    });
}

export function reloadImages() {
    apiSources.forEach((api, index) => {
        const newUri = getDynamicURI(api);

        const img = document.getElementById(`img-${index}`);
        const label = document.getElementById(`uri-${index}`);

        img.src = newUri;
        label.textContent = newUri;
    });
}
