const text = document.querySelector("#text");
const but = document.querySelector("#generate");
const image = document.querySelector("#img");
const themeBtn = document.querySelector("#theme-btn");
const placeholder = document.querySelector(".qr-placeholder");

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

const mainfunction = async () => {
    if (text.value.trim()) {
        try {
            const qr = await fetch("http://localhost:3500/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ text: text.value })
            });

            if (qr.ok) {
                const url = await qr.text();
                image.setAttribute("src", url);
                image.classList.add("show");
                if (placeholder) {
                    placeholder.style.display = "none";
                }
            } else {
                throw new Error("Failed to generate QR code");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to generate QR code. Please make sure the server is running.");
        }
    } else {
        alert("Please enter text");
    }
};

const resetQRDisplay = () => {
    if (!text.value.trim()) {
        image.classList.remove("show");
        if (placeholder) {
            placeholder.style.display = "block";
        }
    }
};

initTheme();

themeBtn.addEventListener("click", toggleTheme);
text.addEventListener("input", resetQRDisplay);
but.addEventListener("click", mainfunction);

text.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        mainfunction();
    }
});