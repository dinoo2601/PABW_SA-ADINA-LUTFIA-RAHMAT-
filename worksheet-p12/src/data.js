export const profil = {
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

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) =>
  daftar.map((keahlian) => keahlian.nama).join(" · ");

export function saring(daftar, kategori) {
  if (kategori === "semua") return daftar;
  return daftar.filter((materi) => materi.kategori === kategori);
}
