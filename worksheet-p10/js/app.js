
import { ambilProyek } from './api.js';
import {
  render,
  tampilkanGalat,
  aturMemuat
} from './dom.js';

const profil = {
  nama: "Sa'adina Lutfia Rahmat",
  nim: "25523033",
  tahun: 2026,
  judul: "Matematika bersama Dina",
  peran: "matematika menyenangkan jika dipelajari bersama",
  keahlian: [
    { nama: "HTML" },
    { nama: "CSS" },
    { nama: "JavaScript" },
  ],
  jumlahMateri: 4,
};

const daftarMateri = [
  {
    judul: "Luas Persegi",
    kategori: "geometri",
    deskripsi: "Belajar menghitung luas persegi dari panjang sisinya.",
    rumus: "L = s x s",
  },
  {
    judul: "Luas Segitiga",
    kategori: "geometri",
    deskripsi: "Kenali hubungan alas dan tinggi untuk mencari luas segitiga.",
    rumus: "L = 1/2 x a x t",
  },
  {
    judul: "Luas Lingkaran",
    kategori: "geometri",
    deskripsi: "Gunakan pi dan jari-jari untuk menghitung luas lingkaran.",
    rumus: "L = pi x r x r",
  },
  {
    judul: "Latihan Menghitung Luas",
    kategori: "latihan",
    deskripsi: "Coba soal persegi, segitiga, dan lingkaran yang tersedia di halaman ini.",
    rumus: "Pilih rumus sesuai bentuknya",
  },
];

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.map((keahlian) => keahlian.nama).join(" · ");

const judulHalaman = document.querySelector("#Home h1");
const peranHalaman = document.querySelector("#Home > p");
const identitasFooter = document.querySelector("#Kontak p");

if (judulHalaman === null || peranHalaman === null || identitasFooter === null) {
  throw new Error("Elemen identitas profil tidak ditemukan di halaman.");
}

document.title = profil.judul;
judulHalaman.textContent = profil.judul;
peranHalaman.textContent = profil.peran;
identitasFooter.textContent = `${profil.nama} · ${profil.nim} · ${profil.tahun}`;

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

console.table(profil.keahlian);
console.table(daftarMateri);

const materiGeometri = daftarMateri.filter((materi) => materi.kategori === "geometri");
console.table(materiGeometri);

const materiLingkaran = daftarMateri.find((materi) => materi.judul === "Luas Lingkaran");
console.log(materiLingkaran);

const judulMateri = daftarMateri.map((materi) => materi.judul);
console.log("Panjang hasil map sama:", judulMateri.length === daftarMateri.length);

const materiTerurut = [...daftarMateri].sort((a, b) => a.judul.localeCompare(b.judul));
console.table(materiTerurut);
console.log("Daftar asli tetap:", daftarMateri.map((materi) => materi.judul));

const filterElements = document.querySelectorAll(".filter");
const daftar = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#kosong");

const teksFilter = Array.from(filterElements).map((elemen) => elemen.textContent);
console.log(teksFilter);

if (daftar === null || pesanKosong === null || filterElements.length === 0) {
  throw new Error("Elemen daftar materi atau filter tidak ditemukan.");
}


async function muat() {
  aturMemuat(true);

  try {
    const data = await ambilProyek();

    render(data);
  } catch (galat) {
    tampilkanGalat(
      'Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.'
    );
    console.error(galat.message);
  } finally {
    aturMemuat(false);
  }
}

muat();
