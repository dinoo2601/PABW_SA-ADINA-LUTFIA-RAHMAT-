<script setup>
import { pilihKategori, state } from '../state.js'

const filter = [
  { kategori: 'semua', label: 'Semua materi' },
  { kategori: 'geometri', label: 'Bangun datar' },
  { kategori: 'latihan', label: 'Latihan' },
]
</script>

<template>
  <div class="filter-bar" role="group" aria-label="Filter materi matematika">
    <button
      v-for="opsi in filter"
      :key="opsi.kategori"
      class="filter"
      type="button"
      :data-filter="opsi.kategori"
      :aria-pressed="String(state.kategoriAktif === opsi.kategori)"
      @click="pilihKategori(opsi.kategori)"
    >
      {{ opsi.label }}
    </button>
  </div>
</template>
