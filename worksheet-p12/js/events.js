import { aturUlang, pilihKategori, tambahFavorit } from './state.js';

export function pasangPendengar() {
  document.querySelectorAll(".filter").forEach((tombol) => {
    tombol.addEventListener("click", () => {
      const nilai = tombol.dataset.filter;

      if (!nilai) {
        throw new Error("Kategori filter tidak ditemukan.");
      }

      pilihKategori(nilai);
    });
  });

  const tombolAturUlang = document.querySelector("#atur-ulang");
  if (!tombolAturUlang) {
    throw new Error("Tombol atur ulang tidak ditemukan.");
  }

  tombolAturUlang.addEventListener("click", aturUlang);

  const daftar = document.querySelector("#daftar");
  if (!daftar) {
    throw new Error("Elemen daftar materi tidak ditemukan.");
  }

  daftar.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;

    const tombol = event.target.closest(".favorit");
    if (!tombol) return;

    const id = Number(tombol.dataset.id);
    if (!Number.isInteger(id)) {
      throw new Error("ID proyek favorit tidak valid.");
    }

    tambahFavorit(id);
  });
}
