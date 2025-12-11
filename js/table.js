import { apiSources } from "./api-data.js";

export function buildTable() {
    const tbody = document.getElementById("api-table-body");
    tbody.innerHTML = "";

    apiSources.forEach(api => {
        const uriPreview = api.urn.includes("RANDOM")
            ? "Generado dinámicamente"
            : api.baseUrl + api.urn;

        const row = `
            <tr class="bg-white border-b border-default">
                <th class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    ${api.name}
                </th>

                <td class="px-6 py-4 text-blue-600">${api.baseUrl}</td>
                <td class="px-6 py-4">${api.urn || "—"}</td>

                <td class="px-6 py-4 break-all text-gray-700">
                    ${uriPreview}
                </td>

                <td class="px-6 py-4">${api.notes}</td>
            </tr>
        `;

        tbody.innerHTML += row;
    });
}
