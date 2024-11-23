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

function setTime() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  timeElement.innerHTML = `${hours}:${minutes}:${seconds}`;
  setTimeout(setTime, 1000);
}

setTime();
