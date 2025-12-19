fetch("/data/news.json")
    .then(res => res.json())
    .then(data => renderNews(data));

function renderNews(news) {
    const grid = document.getElementById("news-grid");
    grid.setAttribute("data-aos", "fade-right");

    news.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "news-card";

        const sliderId = `news-slider-${index}`;

        card.innerHTML = `
            <div class="news-media" id="${sliderId}">
                ${item.pics.map((img, i) => `
                    <img src="/${img}" class="${i === 0 ? "active" : ""}">
                `).join("")}
            </div>

            <div class="news-content">
                <span class="news-date">${item.date}</span>
                <h3>${item.title}</h3>
                <p>${truncate(item.desc, 120)}</p>
                <button class="read-more">Read more</button>
            </div>
        `;

        card.querySelector(".read-more").addEventListener("click", () => {
            openModal(item);
        });

        grid.appendChild(card);

        if (item.pics.length > 1) {
            startSlideshow(sliderId);
        }
    });
}

function startSlideshow(containerId) {
    const images = document
        .getElementById(containerId)
        .querySelectorAll("img");

    let index = 0;

    setInterval(() => {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }, 3500);
}

function truncate(text, limit) {
    return text.length > limit
        ? text.slice(0, limit) + "..."
        : text;
}

const modal = document.getElementById("news-modal");

function openModal(item) {
    const media = modal.querySelector(".news-modal-media");
    const title = modal.querySelector(".news-modal-title");
    const desc = modal.querySelector(".news-modal-desc");
    const date = modal.querySelector(".news-modal-date");

    media.innerHTML = item.pics.map((img, i) => `
        <img src="/${img}" class="${i === 0 ? "active" : ""}">
    `).join("");

    title.textContent = item.title;
    desc.textContent = item.desc;
    date.textContent = item.date;
    document.body.style.overflow = "hidden";

    modal.classList.add("active");

    if (item.pics.length > 1) {
        startModalSlideshow(media);
    }
}

function startModalSlideshow(container) {
    const images = container.querySelectorAll("img");
    let index = 0;

    setInterval(() => {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }, 3500);
}

modal.querySelector(".news-modal-close").onclick = closeModal;
modal.querySelector(".news-modal-overlay").onclick = closeModal;

function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
}
