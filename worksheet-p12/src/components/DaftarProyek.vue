<script setup>
import { computed } from 'vue'
import { saring } from '../data.js'
import { aturUlang, state, tambahFavorit } from '../state.js'

const proyekTerpilih = computed(() =>
  saring(state.daftarProyek, state.kategoriAktif)
)
</script>

<template>
  <p v-if="state.memuat" id="muat" role="status">Memuat data...</p>
  <p v-else-if="state.galat" id="galat" role="alert">{{ state.galat }}</p>
  <p v-else-if="proyekTerpilih.length === 0" id="kosong" role="status">
    Belum ada materi untuk kategori ini.
  </p>
  <ul v-else id="daftar" class="katalog" aria-live="polite">
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
  <button id="atur-ulang" type="button" @click="aturUlang">Atur ulang</button>
</template>
