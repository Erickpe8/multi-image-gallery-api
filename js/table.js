import { apiSources } from "./api-data.js";

export function buildTable() {
    const tbody = document.getElementById("api-table-body");
    tbody.innerHTML = "";

    apiSources.forEach(api => {
        const uri = api.baseUrl + api.urn;

        const row = `
            <tr class="border-b">
                <td class="p-2">${api.name}</td>
                <td class="p-2 text-blue-600">${api.baseUrl}</td>
                <td class="p-2">${api.urn}</td>
                <td class="p-2 break-all text-gray-700">${uri}</td>
                <td class="p-2 text-gray-600">${api.notes}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}