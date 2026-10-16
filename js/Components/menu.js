export function menu() {
  const myToggle = document.getElementById("toggle-menu");
  const myMenu = document.getElementById("navMenu");

  myToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    myMenu.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!myMenu.contains(e.target)) {
      myMenu.classList.remove("open");
    }
  });
}
