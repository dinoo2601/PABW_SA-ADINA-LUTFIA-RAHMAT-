<script setup>
import { computed } from 'vue'
import { saring } from '../data.js'
import { aturUlang, state, tambahFavorit } from '../state.js'

const proyekTerpilih = computed(() =>
  saring(state.daftarProyek, state.kategoriAktif)
)
</script>

<template>
  <ul id="daftar" class="katalog" aria-live="polite">
    <li v-for="materi in proyekTerpilih" :key="materi.id" class="kartu">
      <h3>{{ materi.judul }}</h3>
      <p>{{ materi.deskripsi }}</p>
      <p>Rumus: {{ materi.rumus }}</p>
      <button
        class="favorit"
        type="button"
        :data-id="materi.id"
        :aria-label="`Favorit: ${materi.judul}`"
        :aria-pressed="String(state.favorit.includes(materi.id))"
        @click="tambahFavorit(materi.id)"
      >
        {{ state.favorit.includes(materi.id) ? '★' : '☆' }}
      </button>
    </li>
  </ul>
  <p id="muat" role="status" :hidden="!state.memuat">Memuat data...</p>
  <p
    id="kosong"
    role="status"
    :hidden="state.memuat || Boolean(state.pesanGalat) || proyekTerpilih.length > 0"
  >
    Belum ada materi untuk kategori ini.
  </p>
  <p id="galat" :hidden="!state.pesanGalat">{{ state.pesanGalat }}</p>
  <button id="atur-ulang" type="button" @click="aturUlang">Atur ulang</button>
</template>
