import { render } from './dom.js';

export const state = {
  daftarProyek: [],
  kategori: "semua",
};

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  render(state);
}

export function aturKategori(kategori) {
  state.kategori = kategori;
  render(state);
}
