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
          "Tempat keanehan youtuber, steamer, dan vtuber ada disini",
          `<a href="/cc" target="_blank" class="btn btn-primary" rel="noopener noreferrer">Menuju Fanpage</a>`
        );
        break;

      case "gg":
        changeModal(
          "Dikala Anda Menjadi Gamers (DAMG)",
          "Dimana meme dan bug dari gamer arcade, stiker loncat-loncat, sampai waktu opor (overwatch)",
          `<a href="/gg" target="_blank" class="btn btn-primary" rel="noopener noreferrer">Menuju Fanpage</a>`
        );
        break;

      case "62":
        changeModal(
          "Keluh Kesah Kehidupan Manusia",
          "Keanehn dari makhluk bumi dan warga +62",
          `<a href="/62" target="_blank" class="btn btn-primary" rel="noopener noreferrer">Menuju Fanpage</a>`
        );
        break;

      case "bill":
        changeModal(
          "Billy Bot",
          "Robot menjaga server discord sekaligus calon vtuber",
          `<a href="/bill" target="_blank" class="btn btn-primary" rel="noopener noreferrer">Twitter</a>
          <a href="/billstats" target="_blank" class="btn btn-success" rel="noopener noreferrer">Status</a>`
        );
        break;

      case "chat":
        changeModal(
          "Server Discord",
          "Maaf, saat ini servernya lagi maintenance",
          `<a href="/discord" target="_blank" class="btn btn-discord disabled" disabled rel="noopener noreferrer">Discord</a>`
        );
        break;

      case "pray":
        changeModal(
          "Dukung untuk bisa perpanjang domain ini",
          "Selisihkan uang anda untuk memberi makan billy dan memperpanjang domain ini",
          `<a href="/donate" target="_blank" class="btn btn-success" rel="noopener noreferrer">Donate</a>`
        );
        break;
    }
  }
});
