<template>
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
</template>
