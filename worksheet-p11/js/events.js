import { aturKategori } from './state.js';
import { aturFilterAktif } from './dom.js';

export function pasangPendengar() {
  document.querySelectorAll(".filter").forEach((tombol) => {
    tombol.addEventListener("click", () => {
      const kategori = tombol.dataset.filter;

      if (!kategori) {
        throw new Error("Kategori filter tidak ditemukan.");
      }

      aturFilterAktif(kategori);
      aturKategori(kategori);
    });
  });
}
