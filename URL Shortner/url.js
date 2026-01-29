const originalUrl = document.querySelector("#origininput");
const shortUrl = document.querySelector("#shortinput");
const but = document.querySelector("#but button");
const show = document.querySelector("#result");
const themeBtn = document.querySelector("#theme-btn");
const resultContainer = document.querySelector(".result-container");
const placeholder = document.querySelector(".placeholder-text");

const initTheme = () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
};

const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
};

const validateUrl = (url) => {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
};

const shortenUrl = async () => {
    if (!originalUrl.value.trim()) {
        alert("Please enter a URL to shorten");
        originalUrl.focus();
        return;
    }

    if (!validateUrl(originalUrl.value.trim())) {
        alert("Please enter a valid URL (include http:// or https://)");
        originalUrl.focus();
        return;
    }

    if (!shortUrl.value.trim()) {
        alert("Please enter a custom short code");
        shortUrl.focus();
        return;
    }

    try {
        const post = await fetch("http://localhost:4000/insert", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                originalUrl: originalUrl.value.trim(),
                shortUrl: shortUrl.value.trim()
            })
        });

        if (post.ok) {
            if (placeholder) {
                placeholder.style.display = "none";
            }
            resultContainer.classList.add("show");
            show.innerHTML = `<a href="${originalUrl.value}" target="_blank" rel="noopener noreferrer">http://localhost:4000/${shortUrl.value.trim()}</a>`;
        } else {
            throw new Error("Failed to shorten URL");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to shorten URL. Please make sure the server is running and the short code is unique.");
    }
};

initTheme();

themeBtn.addEventListener("click", toggleTheme);

but.addEventListener("click", shortenUrl);

originalUrl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        shortenUrl();
    }
});

shortUrl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        shortenUrl();
    }
});