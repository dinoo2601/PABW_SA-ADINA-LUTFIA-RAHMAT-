
const daftar = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#kosong");
const pesanMuat = document.querySelector("#muat");
const pesanGalat = document.querySelector("#galat");

const filterElements = document.querySelectorAll(".filter");

function buatKartu(materi) {
  const kartu = document.createElement("li");
  const judul = document.createElement("h3");
  const deskripsi = document.createElement("p");
  const rumus = document.createElement("p");

  kartu.className = "kartu";
  judul.textContent = materi.judul;
  deskripsi.textContent = materi.deskripsi;
  rumus.textContent = `Rumus: ${materi.rumus}`;

  kartu.append(judul, deskripsi, rumus);
  return kartu;
}
  
export function render(daftarMateri) {
  if (!daftar || !pesanKosong) {
    throw new Error("Elemen daftar atau pesan kosong tidak ditemukan.");
  }

  daftar.replaceChildren();

  if (pesanGalat) pesanGalat.hidden = true;

  if (daftarMateri.length === 0) {
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;

  daftarMateri.forEach((materi) => {
    daftar.append(buatKartu(materi));
  });
}


export function aturMemuat(status) {
  if (pesanMuat) pesanMuat.hidden = !status;
}

export function tampilkanGalat(pesan) {
  if (pesanGalat) {
    pesanGalat.textContent = pesan;
    pesanGalat.hidden = false;
  }
}
