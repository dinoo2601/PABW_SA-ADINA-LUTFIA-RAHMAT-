<script setup>
import { onMounted } from 'vue'
import { profil } from './data.js'

onMounted(() => import('./app.js'))
</script>

<template>
  <div class="page">
    <header id="Home">
      <h1>{{ profil.judul }}</h1>
      <p>{{ profil.peran }}</p>
      <nav aria-label="Navigasi utama">
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Study">Study</a></li>
          <li><a href="#Materi">Materi</a></li>
          <li><a href="#Bio">Bio</a></li>
        </ul>
      </nav>
    </header>

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
        <div class="filter-bar" role="group" aria-label="Filter materi matematika">
          <button class="filter" type="button" data-filter="semua" aria-pressed="true">Semua materi</button>
          <button class="filter" type="button" data-filter="geometri" aria-pressed="false">Bangun datar</button>
          <button class="filter" type="button" data-filter="latihan" aria-pressed="false">Latihan</button>
        </div>
        <ul id="daftar" class="katalog" aria-live="polite"></ul>
        <p id="muat" role="status" hidden>Memuat data...</p>
        <p id="kosong" role="status" hidden>Belum ada materi untuk kategori ini.</p>
        <p id="galat" hidden></p>
        <button id="atur-ulang" type="button">Atur ulang</button>
      </section>

      <section id="Bio">
        <h2>Bio yang mengerjakan</h2>

        <form action="/simpan" method="post">
          <p>
            <label for="nama">Nama</label>
            <input type="text" id="nama" name="nama" required>
          </p>
          <p>
            <label for="kelas">Kelas</label>
            <input type="text" id="kelas" name="kelas" required>
          </p>
          <p>
            <label for="umur">Umur</label>
            <input type="number" id="umur" name="umur" min="1" required>
          </p>
          <button type="submit">Simpan</button>
        </form>
      </section>
    </main>

    <footer id="Kontak">
      <p>{{ profil.nama }} · {{ profil.nim }} · {{ profil.tahun }}</p>
    </footer>
  </div>
</template>

<style scoped>
.page p {
  font-size: inherit;
}
</style>
