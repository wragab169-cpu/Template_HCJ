// Import Functions
import { bgChanging } from "./Components/bgChanging.js";
import { darkMode } from "./Components/darkMode.js";
import { gear } from "./Components/gear.js";
import { menu } from "./Components/menu.js";
import { navToNewPage } from "./Components/navToNewPage.js";
import { swichColor } from "./Components/swichColor.js";
import { toastNotification } from "./Components/notifications.js";

// Navigation
navToNewPage();

//  Side Menu
menu();

//  Settings Box
gear();

// Switch Colors Settings
swichColor();

// Dark Mode
darkMode();

// Notifications
window.addEventListener("offline", () => {
  toastNotification("You Are Offline");
});
window.addEventListener("online", () => {
  toastNotification("You Are Online");
});

// Changing backgrounds
bgChanging();
