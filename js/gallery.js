import { apiSources } from "./api-data.js";

export function buildGallery() {
    const container = document.getElementById("gallery");
    container.innerHTML = "";

    apiSources.forEach((api, index) => {
        const uri = api.baseUrl + api.urn;

        const card = `
            <div class="bg-white rounded shadow p-3 flex flex-col items-center">
                <img id="img-${index}" 
                     src="${uri}" 
                     class="w-[100px] h-[100px] object-cover rounded"
                     alt="${api.name}"/>

                <h3 class="text-sm mt-2 font-semibold">${api.name}</h3>
                <p class="text-xs text-gray-600">${api.notes}</p>

                <p class="text-[10px] mt-1 text-gray-500 break-all">
                    <strong>URI:</strong>
                    <span id="uri-${index}">${uri}</span>
                </p>
            </div>
        `;

        container.innerHTML += card;
    });
}

export function reloadImages() {
    apiSources.forEach((api, index) => {
        const sep = api.urn.includes("?") ? "&" : "?";
        const newUrn = api.urn + sep + "t=" + Date.now();
        const newUri = api.baseUrl + newUrn;

        document.getElementById(`img-${index}`).src = newUri;
        document.getElementById(`uri-${index}`).textContent = newUri;
    });
}