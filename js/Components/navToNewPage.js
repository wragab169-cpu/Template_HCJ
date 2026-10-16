export function navToNewPage() {
  const links = document.querySelectorAll("#navMenu li");
  const pages = document.querySelectorAll(".page");

  function navToNewPage(pageId) {
    // Remove Active Class From All Links
    links.forEach((link) => {
      link.classList.remove("active");
    });
    // Remove Active Class From All Pages
    pages.forEach((page) => {
      page.classList.remove("active");
    });

    // Add Active Class To Target Page
    document.getElementById(pageId).classList.add("active");
    // Add Active Class To TCliked Link
    document.querySelector(`[data-page = "${pageId}"]`).classList.add("active");

    localStorage.setItem("savedPage", pageId);
  }

  // Add Event Click To Make navTONewpage Work
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      // const targetPage = link.getAttribute("data-page");
      navToNewPage(e.target.getAttribute("data-page"));
      updateBrawserHistory(e.target.getAttribute("data-page"));
      // Close Menu Aftre Click
      document.querySelector("#navMenu").classList.remove("open");
    });
  });

  const lastSavedPage = localStorage.getItem("savedPage");

  if (lastSavedPage) {
    navToNewPage(lastSavedPage);
  } else {
    navToNewPage("home");
  }
  // Add Page TO History
  function updateBrawserHistory(pageId) {
    // Add State To History
    history.pushState({ page: pageId }, "", `#${pageId}`);
    // Save Page In Local Storage
    localStorage.setItem("savedPage", pageId);
  }
  // Listen To Brawser
  window.addEventListener("popstate", (e) => {
    // Chick On Last Page
    if (e.state && e.state.page) {
      navToNewPage(e.state.page);
      localStorage.setItem("savedPage", e.state.page);
    } else {
      navToNewPage("home");
      localStorage.setItem("savedPage", "home");
    }
  });

  if (!history.state) {
    const firstPage = localStorage.getItem("savedPage") || "home";

    history.replaceState({ page: firstPage }, "", `#${firstPage}`);
  }
  // -----------------------------------------------------------
}
