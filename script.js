const searchInput = document.getElementById("searchInput");
const searchMenu = document.getElementById("SearchEngine");
const timeElement = document.getElementById("time");

searchInput.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    searchMenu.style.display = "flex";
    searchMenu.style.left = event.pageX + "px";
    searchMenu.style.top = event.pageY + "px";
});

function searchGoogle() {
    const query = searchInput.value;
    window.open(
        "https://www.google.com/search?q=" + encodeURIComponent(query),
        "_blank"
    );
}

function setTime() {
    const date = new Date();
    const offset = date.getTimezoneOffset() / 60;
    let hours = date.getUTCHours() - offset;
    if (hours < 1) { hours += 24 }
    const Time = `${hours}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
    timeElement.innerHTML = Time;
    setTimeout(setTime, 400);
}

setTime();

function searchBing() {
    const query = searchInput.value;
    window.open(
        "https://www.bing.com/search?q=" + encodeURIComponent(query),
        "_blank"
    );
}

function searchYahoo() {
    const query = searchInput.value;
    window.open(
        "https://search.yahoo.com/search?p=" + encodeURIComponent(query),
        "_blank"
    );
}

function searchWiki() {
    const query = searchInput.value;
    window.open(
        "https://en.wikipedia.org/w/index.php?search=" + encodeURIComponent(query),
        "_blank"
    );
}

function searchDuck() {
    const query = searchInput.value;
    window.open(
        "https://duckduckgo.com/?q=" + encodeURIComponent(query),
        "_blank"
    );
}

function goToURL() {
    const query = searchInput.value;
    window.open("http://" + query, "_blank");
}

function search() {
    switch (searchMenu.value) {
        case "google":
            searchGoogle();
            break;
        case "yahoo":
            searchYahoo();
            break;
        case "bing":
            searchBing();
            break;
        case "duck":
            searchDuck();
            break;
        case "wiki":
            searchWiki();
            break;
        case "http":
            goToURL();
            break;
    }
}
