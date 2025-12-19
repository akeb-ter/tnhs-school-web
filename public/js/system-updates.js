fetch("/data/system-updates.json")
    .then(response => response.json())
    .then(data => renderUpdates(data))
    .catch(() => {
        document.getElementById("updates-list").innerHTML =
            "<p>Unable to load system updates.</p>";
    });

function renderUpdates(updates) {
    const container = document.getElementById("updates-list");

    updates.forEach(update => {
        const type = classifyUpdate(update.message);
        const date = formatDate(update.date);

        const item = document.createElement("div");
        item.setAttribute("data-aos", "fade-right");
        item.className = `update-item ${type}`;

        item.innerHTML = `
            <div class="update-header">
                <span class="update-tag">${typeLabel(type)}</span>
                <span class="update-date">${date}</span>
            </div>
            <h3>${sanitizeTitle(update.message)}</h3>
            <p>${sanitizeDescription(update.message)}</p>
            <small>Updated by ${update.author}</small>
        `;

        container.appendChild(item);
    });
}

function classifyUpdate(message) {
    const msg = message.toLowerCase();

    if (msg.includes("add")) return "added";
    if (msg.includes("implement")) return "implemented";
    if (msg.includes("refactor") || msg.includes("enhance")) return "improved";

    return "improved";
}

function typeLabel(type) {
    if (type === "added") return "Added";
    if (type === "implemented") return "Implemented";
    return "Improved";
}

function formatDate(rawDate) {
    const date = new Date(rawDate);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

function sanitizeTitle(message) {
    return message.split(" with ")[0];
}

function sanitizeDescription(message) {
    return message;
}
