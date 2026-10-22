<script setup>
const props = defineProps({
  profil: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <header id="Home">
    <h1>{{ props.profil.judul }}</h1>
    <p>{{ props.profil.peran }}</p>
    <nav aria-label="Navigasi utama">
      <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#Study">Study</a></li>
        <li><a href="#Materi">Materi</a></li>
        <li><a href="#Bio">Bio</a></li>
      </ul>
    </nav>
  </header>
</template>
