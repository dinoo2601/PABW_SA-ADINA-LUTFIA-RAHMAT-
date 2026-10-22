import { reactive } from 'vue'

const KUNCI = 'pabw-p11'
const VERSI = 2
const KATEGORI_VALID = ['semua', 'geometri', 'latihan']

export const state = reactive({
  daftarProyek: [],
  kategoriAktif: 'semua',
  favorit: [],
  memuat: false,
  pesanGalat: '',
})

export function simpan() {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
    favorit: state.favorit,
  }

  localStorage.setItem(KUNCI, JSON.stringify(isi))
}

export function muat() {
  const teks = localStorage.getItem(KUNCI)
  if (teks === null) return null

  let isi
  try {
    isi = JSON.parse(teks)
  } catch (galat) {
    if (!(galat instanceof SyntaxError)) throw galat
    localStorage.removeItem(KUNCI)
    return null
  }

  if (
    !isi ||
    typeof isi !== 'object' ||
    isi.versi !== VERSI ||
    !KATEGORI_VALID.includes(isi.kategoriAktif) ||
    !Array.isArray(isi.favorit) ||
    !isi.favorit.every((id) => Number.isInteger(id))
  ) {
    localStorage.removeItem(KUNCI)
    return null
  }

  return isi
}

export function pulihkan(isi) {
  if (!isi) return

  state.kategoriAktif = isi.kategoriAktif
  state.favorit = [...isi.favorit]
}

export function isiProyek(daftar) {
  state.daftarProyek = daftar
}

export function pilihKategori(kategori) {
  if (!KATEGORI_VALID.includes(kategori)) {
    throw new Error(`Kategori tidak valid: ${kategori}`)
  }

  state.kategoriAktif = kategori
  simpan()
}

export function tambahFavorit(id) {
  if (!Number.isInteger(id)) {
    throw new Error(`ID favorit tidak valid: ${id}`)
  }
  if (state.favorit.includes(id)) return

  state.favorit = [...state.favorit, id]
  simpan()
}

export function aturUlang() {
  localStorage.removeItem(KUNCI)
  state.kategoriAktif = 'semua'
  state.favorit = []
  state.pesanGalat = ''
}
