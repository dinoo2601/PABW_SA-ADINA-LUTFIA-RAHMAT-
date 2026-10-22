<script setup>
import { onMounted, watch } from 'vue'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
import { ambilProyek } from './api.js'
import { profil } from './data.js'
import { isiProyek, muat, pulihkan, simpan, state } from './state.js'

document.title = profil.judul

onMounted(async () => {
  pulihkan(muat())
  state.memuat = true
  state.galat = ''

  try {
    isiProyek(await ambilProyek())
  } catch (galat) {
    state.galat =
      'Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.'
    console.error(galat)
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="profil" />

    <main>
      <section id="Study">
        <h2>Belajar bersama</h2>

        <figure>
          <img src="/gambar1.jpg" alt="Ilustrasi pembelajaran matematika" width="640" height="360" loading="lazy">
          <figcaption>Gambar pendukung pembelajaran matematika</figcaption>
        </figure>

        <table>
          <caption>Daftar Rumus Matematika Dasar</caption>
          <thead>
            <tr>
              <th scope="col">Rumus</th>
              <th scope="col">Penemu (fun fact)</th>
              <th scope="col">Soal Latihan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Luas persegi = s x s</th>
              <td>Bangsa Mesir Kuno menggunakan geometri untuk mengukur tanah.</td>
              <td>Jika sisi persegi 6 cm, berapa luasnya?</td>
            </tr>
            <tr>
              <th scope="row">Luas segitiga = 1/2 x a x t</th>
              <td>Thales dikenal sebagai salah satu tokoh awal geometri Yunani.</td>
              <td>Jika alas 8 cm dan tinggi 5 cm, berapa luasnya?</td>
            </tr>
            <tr>
              <th scope="row">Luas lingkaran = pi x r x r</th>
              <td>Nilai pi digunakan untuk menghitung ukuran lingkaran.</td>
              <td>Jika jari-jari 7 cm, berapa luas lingkarannya?</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="Materi" aria-labelledby="judul-materi">
        <h2 id="judul-materi">Materi matematika</h2>
        <TombolFilter />
        <DaftarProyek />
      </section>

      <FormKontak />
    </main>

    <footer id="Kontak">
      <p>{{ profil.nama }} · {{ profil.nim }} · {{ profil.tahun }}</p>
    </footer>
  </div>
</template>

<style>
.page p {
  font-size: inherit;
}
</style>
