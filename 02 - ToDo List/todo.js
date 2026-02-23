const refresh = document.querySelector("#refresh");
const add = document.querySelector("#add");
const add2 = document.querySelector("#add2");
const input = document.querySelector("#todo");
const cancel = document.querySelector("#cancel");
const closeModal = document.querySelector("#close-modal");
const hidden = document.querySelector(".above");
const divclone = document.querySelector(".data");
const main = document.querySelector("main");
const emptyState = document.querySelector(".empty-state");
const themeBtn = document.querySelector("#theme-btn");

let donebut;

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

const showModal = () => {
    hidden.classList.add("show");
    input.focus();
};

const hideModal = () => {
    hidden.classList.remove("show");
    input.value = "";
};

const updateEmptyState = () => {
    const tasks = main.querySelectorAll(".data");
    const visibleTasks = Array.from(tasks).filter(task => task.style.display === "flex");
    
    if (visibleTasks.length > 0) {
        emptyState.style.display = "none";
    } else {
        emptyState.style.display = "block";
    }
};

add.addEventListener("click", showModal);

cancel.addEventListener("click", hideModal);

closeModal.addEventListener("click", hideModal);

hidden.querySelector(".modal-overlay").addEventListener("click", hideModal);

refresh.addEventListener("click", () => {
    location.reload();
});

themeBtn.addEventListener("click", toggleTheme);

const getdata = async () => {
    try {
        let raw = await fetch("http://localhost:3800/getdata");
        return await raw.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

const push = async (data) => {
    try {
        let update = await fetch("http://localhost:3800/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return update.ok;
    } catch (error) {
        console.error("Error updating data:", error);
        return false;
    }
};

const clone = async () => {
    let data = await getdata();
    data.forEach((obj) => {
        let topic = obj.topic;
        let clone = divclone.cloneNode(true);
        clone.querySelector("h2").innerText = topic;
        let but = clone.querySelector("button");
        but.setAttribute("id", topic);
        clone.style.display = "flex";
        main.appendChild(clone);
        donebut = main.querySelectorAll(".btn-done");
        done();
    });
    updateEmptyState();
};

clone();

add2.addEventListener("click", async () => {
    if (input.value.trim() === "") {
        alert("Please enter a task");
    } else {
        let data = await getdata();
        let obj = { topic: input.value.trim() };
        data.push(obj);
        const success = await push(data);
        if (success) {
            donebut = main.querySelectorAll(".btn-done");
            done();
            location.reload();
        } else {
            alert("Failed to add task. Please make sure the server is running.");
        }
    }
});

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        add2.click();
    }
});

const done = () => {
    donebut.forEach((item) => {
        item.addEventListener("click", async () => {
            let del = item.getAttribute("id");
            let data = await getdata();
            let newdata = data.filter((item) => {
                return item.topic != del;
            });
            const success = await push(newdata);
            if (success) {
                location.reload();
            } else {
                alert("Failed to delete task. Please try again.");
            }
        });
    });
};

initTheme();
