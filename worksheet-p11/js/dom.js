
import {
  profil,
  buatPerkenalan,
  formatKeahlian,
  saring,
} from './data.js';

const judulHalaman = document.querySelector("#Home h1");
const peranHalaman = document.querySelector("#Home > p");
const identitasFooter = document.querySelector("#Kontak p");
const daftar = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#kosong");
const pesanMuat = document.querySelector("#muat");
const pesanGalat = document.querySelector("#galat");
const filterElements = document.querySelectorAll(".filter");

if (
  !judulHalaman ||
  !peranHalaman ||
  !identitasFooter ||
  !daftar ||
  !pesanKosong
) {
  throw new Error("Elemen halaman yang dibutuhkan tidak ditemukan.");
}

document.title = profil.judul;
judulHalaman.textContent = profil.judul;
peranHalaman.textContent = profil.peran;
identitasFooter.textContent = `${profil.nama} · ${profil.nim} · ${profil.tahun}`;
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

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
  
export function render({ daftarProyek, kategori }) {
  daftar.replaceChildren();

  if (pesanGalat) pesanGalat.hidden = true;

  const materiTerpilih = saring(daftarProyek, kategori);

  if (materiTerpilih.length === 0) {
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;

  materiTerpilih.forEach((materi) => {
    daftar.append(buatKartu(materi));
  });
}

export function aturFilterAktif(kategori) {
  filterElements.forEach((tombol) => {
    tombol.setAttribute(
      "aria-pressed",
      String(tombol.dataset.filter === kategori)
    );
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
