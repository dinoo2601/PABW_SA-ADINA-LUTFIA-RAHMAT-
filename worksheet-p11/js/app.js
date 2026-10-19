import { ambilProyek } from './api.js';
import { isiProyek } from './state.js';
import { pasangPendengar } from './events.js';
import { tampilkanGalat, aturMemuat } from './dom.js';

async function mulai() {
  pasangPendengar();
  aturMemuat(true);

  try {
    isiProyek(await ambilProyek());
  } catch (galat) {
    tampilkanGalat(
      'Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.'
    );
    console.error(galat);
  } finally {
    aturMemuat(false);
  }
}

mulai();
