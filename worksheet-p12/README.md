# Pertemuan 12 — Migrasi ke Vue

Proyek ini memindahkan halaman P11 ke Vue tanpa mengubah tampilan atau isi
stylesheet. Enam berkas CSS berada di `src/` dan diimpor melalui `src/main.js`.
Gambar dan data JSON statis berada di `public/`; modul JavaScript P11 berada di
`src/` untuk dilanjutkan pada lembar berikutnya.

## Komponen halaman

- `App.vue` menyusun halaman dan meneruskan profil ke `KepalaProfil.vue`.
- `TombolFilter.vue` dan `DaftarProyek.vue` membaca state bersama dari `state.js`.
- `FormKontak.vue` menampilkan formulir bio.

Hanya `KepalaProfil.vue` yang menerima props.

Jalankan server pengembangan dengan:

```sh
npm run dev
```
