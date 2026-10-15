
const ALAMAT = 'data/proyek-tidak-ada.json';

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);

    console.log(
      'status:', respons.status,
      'ok:', respons.ok
    );

    if (!respons.ok) {
      throw new Error('status ' + respons.status);
    }

    const data = await respons.json();

    console.log('Data proyek:', data);

    return data;
  } catch (galat) {
    console.error('Gagal memuat:', galat.message);
    throw galat;
  }
}ambilProyek()
  .then(data => console.log('Berhasil:', data))
  .catch(galat => console.error('Tes gagal:', galat.message));
