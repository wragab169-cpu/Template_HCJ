export function darkMode() {
  // Select Toggle Theme Button
  const toggleTheme = document.querySelector("#toggle-theme");

  // Chick on Theme in Local Storage
  const theme = localStorage.getItem("theme");

  // Add thheme from Local Storage
  if (theme === "dark") {
    document.body.classList.add("dark");
  }

  // Add Event To Toggle Theme Button
  toggleTheme.addEventListener("click", () => {
    // Toggle Class Dark On Body
    document.body.classList.toggle("dark");
    // Save User Option Dark Mode In Local Storage
    let theme = "light";
    if (document.body.classList.contains("dark")) {
      theme = "dark";
    }
    localStorage.setItem("theme", theme);
  });
}
