function dropUp(e) {
  const dropupContent = document.getElementById("dropup-content");
  if (e.target.classList.contains("setting")) {
    dropupContent.style.display = "block";
  } else {
    dropupContent.style.display = "none";
  }
}

function searchInput(e) {
  var url = "http://www.google.com/search?q=" + e.target.value;
}
// function googleImages() {
//   const hideEl = document.querySelectorAll(".hide");
//   hideEl.forEach((item) => (item.style.display = "none"));
// }
document.addEventListener("click", dropUp);
document.getElementById("search-input").addEventListener("input", searchInput);
document.getElementById("images").addEventListener("click", googleImages());
