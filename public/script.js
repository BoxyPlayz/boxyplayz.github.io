document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchMenu = document.getElementById("SearchEngine");
    const timeElement = document.getElementById("time");
    const password = "b4";
    const passwordPrompt = document.getElementById("password-prompt");
    const passwordInput = document.getElementById("password-input");
    const passwordSubmit = document.getElementById("password-submit");
    const protectedContent = document.querySelector("protected-content");
    const protectedLabel = document.getElementById("protected-label");
  
    // Utility to handle cookies
    const setCookie = (name, value, days) => {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
    };
  
    const getCookie = (name) => {
      const cookies = document.cookie.split("; ");
      for (let i = 0; i < cookies.length; i++) {
        const [key, value] = cookies[i].split("=");
        if (key === name) return value;
      }
      return null;
    };
  
    // Check for existing authorization cookie
    if (getCookie("authorized") === "true") {
      passwordPrompt.style.display = "none";
      protectedContent.style.display = "block";
      protectedLabel.style.display = "none";
      document.title = "Press to play"
    }
  
    passwordSubmit.addEventListener("click", () => {
      if (passwordInput.value === password) {
        setCookie("authorized", "true", 8); 
        passwordPrompt.style.display = "none";
        protectedContent.style.display = "block";
        protectedLabel.style.display = "none";
      document.title = "Press to play"
      } else {
        alert("Incorrect password. Please try again.");
        passwordInput.value = "";
      }
    });
  
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
        "https://en.wikipedia.org/w/index.php?search=" +
          encodeURIComponent(query),
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
  });  