const profil = {
  nama: "Sa'adina Lutfia Rahmat",
  nim: "25523033",
  tahun: 2026,
  judul: "Matematika bersama Dina",
  peran: "Mahasiswa yang sedang belajar membuat halaman web matematika",
  keahlian: [
    { nama: "HTML" },
    { nama: "CSS" },
    { nama: "JavaScript" },
  ],
  jumlahProyek: 1,
};

const daftarProyek = [
  { judul: "Halaman Matematika bersama Dina", tahun: 2026, selesai: true },
  { judul: "Data Profil JavaScript", tahun: 2026, selesai: false },
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
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const proyekProfil = daftarProyek.find((proyek) => proyek.judul === "Halaman Matematika bersama Dina");
console.log(proyekProfil);

const judulProyek = daftarProyek.map((proyek) => proyek.judul);
console.log("Panjang hasil map sama:", judulProyek.length === daftarProyek.length);

const proyekTerurut = [...daftarProyek].sort((a, b) => a.judul.localeCompare(b.judul));
console.table(proyekTerurut);
console.log("Daftar asli tetap:", daftarProyek.map((proyek) => proyek.judul));