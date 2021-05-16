let modalLabel = document.getElementById("menuModalLabel");
let modalBody = document.getElementById("modal-body");
let modalFooter = document.getElementById("modal-footer");

const changeModal = (header = "", body = "", footer = "") => {
  if (header) modalLabel.innerHTML = header;
  if (body) modalBody.innerHTML = body;
  if (footer) modalFooter.innerHTML = footer;
};

document.addEventListener("click", e => {
  if (e.target.classList.contains("menu-click")) {
    let menuClick = e.target;
    console.log(menuClick.dataset.item);
    switch (menuClick.dataset.item) {
      case "cc":
        changeModal(
          "Dikala Anda Menjadi Konten Kreator (DAMCC)",
          "",
          `<a href="/cc" target="_blank" class="btn btn-primary" rel="noopener noreferrer">Menuju Fanpage</a>`
        );
        break;

      case "gg":
        changeModal(
          "Dikala Anda Menjadi Gamers (DAMG)",
          "",
          `<a href="/gg" target="_blank" class="btn btn-primary" rel="noopener noreferrer">Menuju Fanpage</a>`
        );
        break;

      case "62":
        changeModal(
          "Keluh Kesah Kehidupan Manusia",
          "",
          `<a href="/62" target="_blank" class="btn btn-primary" rel="noopener noreferrer">Menuju Fanpage</a>`
        );
        break;

      case "bill":
        changeModal(
          "Billy Bot",
          "",
          `<a href="/62" target="_blank" class="btn btn-primary" rel="noopener noreferrer">Menuju Fanpage</a>`
        );
        break;

      case "chat":
        changeModal(
          "Server Discord",
          "",
          `<a href="/62" target="_blank" class="btn btn-primary" rel="noopener noreferrer">Menuju Fanpage</a>`
        );
        break;

      case "pray":
        changeModal(
          "Dukung untuk bisa perpanjang domain ini",
          "",
          `<a href="/62" target="_blank" class="btn btn-primary" rel="noopener noreferrer">Menuju Fanpage</a>`
        );
        break;
    }
  }
});
