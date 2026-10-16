export function toastNotification(msg) {
  // Create Element
  const toast = document.createElement("div");

  // Add Class To Element
  toast.classList.add("toast");

  // Add Text Massage To Elemnet
  toast.innerText = msg;

  // Add Element To Container
  document.getElementById("toast-container").appendChild(toast);

  // Add Time Out
  setTimeout(() => {
    // Add Class Hide
    toast.classList.add("hide");
    // Time To Remove Toast
    setTimeout(() => {
      toast.remove();
    }, 500);
  }, 3000);
}
