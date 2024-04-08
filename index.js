function showTime() {
	const date = new Date();

	let today = date.toLocaleString("en", { weekday: "long" });
	let hour = date.toLocaleString("pl", { hour: "2-digit" }); // use 24h time format
	let minute = date.toLocaleString("en", { minute: "2-digit" });
	let second = date.toLocaleString("en", { second: "2-digit" });
	let day = date.toLocaleString("en", { day: "2-digit" });
	let month = date.toLocaleString("en", { month: "2-digit" });
	let year = date.toLocaleString("en", { year: "numeric" });

	minute = addZero(minute);
	second = addZero(second);

	document.getElementById(
		"date"
	).innerHTML = `${today}, ${hour}:${minute}:${second} | ${day}/${month}/${year}`;
	setTimeout(showTime, 0);
}

function addZero(i) {
	if (i.length < 2) i = "0" + i;
	return i;
}

showTime();

// This function will focus on the search bar and clear it
function focusAndClearSearchBar() {
	var searchBox = document.getElementById("googleSearchBox");
	searchBox.focus();
	searchBox.value = '';
}

// Call the focusAndClearSearchBar function when the page loads and after a search is performed
window.onload = focusAndClearSearchBar;

function searchGoogle(event) {
  if (event.key === "Enter") {
    var searchText = document.getElementById("googleSearchBox").value;
    var searchQuery = encodeURIComponent(searchText);
    window.open("https://www.google.com/search?q=" + searchQuery, "_blank");
    // Clear the search box and focus on it
    focusAndClearSearchBar();
  }
}