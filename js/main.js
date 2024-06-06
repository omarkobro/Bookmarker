
let nameInput = document.getElementById("bookmarkName");
let urlInput = document.getElementById("bookmarkURL");
let regexURL = /^(https?:\/\/)?([a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?)$/;
let regexName = /^[A-Za-z][A-Za-z0-9_]{3,29}$/;
let list = [];

let moonIcon = document.getElementById("moonIcon");
let sunIcon = document.getElementById("sunIcon");
let themeStylesheet = document.getElementById("themeStylesheet");

if (localStorage.getItem("list") == null) {
    list = [];
} else {
    list = JSON.parse(localStorage.getItem("list"));
    displayData();
}

function toggleTheme() {
    if (themeStylesheet.getAttribute("href") === "css/light-mode.css") {
        themeStylesheet.setAttribute("href", "css/dark-mode.css");
        moonIcon.style.display = "none";
        sunIcon.style.display = "block";
    } else {
        themeStylesheet.setAttribute("href", "css/light-mode.css");
        moonIcon.style.display = "block";
        sunIcon.style.display = "none";
    }
}

function toggleTheme() {
    if (themeStylesheet.getAttribute("href") === "css/light-mode.css") {
        themeStylesheet.setAttribute("href", "css/dark-mode.css");
        moonIcon.style.display = "none";
        sunIcon.style.display = "block";
    } else {
        themeStylesheet.setAttribute("href", "css/light-mode.css");
        moonIcon.style.display = "block";
        sunIcon.style.display = "none";
    }
}

function submitBookmark() {
    let url = urlInput.value.trim();
    let name = nameInput.value.trim();
    
    if (!url.match(/^https?:\/\//)) {
        url = "http://" + url; // Default to http:// if no protocol is provided
    }
    
    if (regexURL.test(url) && regexName.test(name)) {
        hideErrorBox();
        let site = {
            name: name,
            url: url
        };
        list.push(site);
        localStorage.setItem("list", JSON.stringify(list));
        displayData();
        clearInputs();
    } else {
        showErrorBox();
    }
}

function clearInputs() {
    nameInput.value = ""; 
    urlInput.value = "";
}

function displayData() {
    let temp = "";
    list.forEach((site, index) => {
        temp += `<tr>
            <td>${index + 1}</td>
            <td>${site.name}</td>
            <td>
                <button class="btn btn-primary">
                    <i class="fa-solid fa-eye"></i>
                    <a href="${site.url}" style="color: white; text-decoration: none;" target="_blank">Visit</a>
                </button>
            </td>
            <td>
                <button onclick="deleteSite(${index})" class="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>
                    Delete
                </button>
            </td>
        </tr>`;
    });
    document.getElementById("tableContent").innerHTML = temp;
}

function deleteSite(index) {
    list.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(list));
    displayData();
}

function showErrorBox() {
    document.getElementById("box-conent").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function hideErrorBox() {
    document.getElementById("box-conent").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function exit() {
    hideErrorBox();
    clearInputs();
}
