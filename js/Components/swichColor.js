export function swichColor() {
  // Chick Color In Local Storage
  let mainColor = localStorage.getItem("colors-option");

  if (mainColor !== null) {
    document.documentElement.style.setProperty("--main-color", mainColor);
    // Add Active Class From All Lis In Local Storage
    document.querySelectorAll(".colors-list li").forEach((element) => {
      // Remove Active class
      element.classList.remove("active");
      // Add Active Class On Element with Data Color === MianColor
      if (element.dataset.color === mainColor) {
        // Add Active Class
        element.classList.add("active");
      }
    });
  }
  // Switch Colors Settings
  const myLis = document.querySelectorAll("ul.colors-list li");

  // Loop On All Lis Items
  myLis.forEach((li) => {
    // Event Click On All Lis
    li.addEventListener("click", (e) => {
      // Change --main-color Variable
      document.documentElement.style.setProperty(
        "--main-color",
        e.target.dataset.color,
      );

      // Set Color In Local Storage
      localStorage.setItem("colors-option", e.target.dataset.color);

      // Remove Active Class From All Lis
      e.target.parentElement.querySelectorAll(".active").forEach((element) => {
        element.classList.remove("active");
      });

      // Add Active Class On Clicked Li
      e.target.classList.add("active");
    });
  });
}
