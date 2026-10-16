export function gear() {
  document.querySelector(".gear").onclick = function () {
    document.querySelector(".fa-gear").classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open");
  };
}
