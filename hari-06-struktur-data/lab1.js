const Peserta = [
  { id: 1, nama: "Sari", kelas: "Web", nilai: 90, aktif: true },
  { id: 2, nama: "Budi", kelas: "Web", nilai: 68, aktif: true },
  { id: 3, nama: "Citra", kelas: "Data", nilai: 82, aktif: false },
];


const peserta = [
  { id: 1, nama: "Sari", kelas: "Web", nilai: 90, aktif: true },
  { id: 2, nama: "Budi", kelas: "Web", nilai: 68, aktif: true },
  { id: 3, nama: "Citra", kelas: "Data", nilai: 82, aktif: false },
  { id: 4, nama: "Dina", kelas: "Data", nilai: 88, aktif: true },
  { id: 5, nama: "Eko", kelas: "Web", nilai: 75, aktif: true },
  { id: 6, nama: "Fani", kelas: "Data", nilai: 92, aktif: false },
  { id: 7, nama: "Gilang", kelas: "Web", nilai: 80, aktif: true },
  { id: 8, nama: "Hani", kelas: "Data", nilai: 85, aktif: true },
  { id: 9, nama: "Indra", kelas: "Web", nilai: 78, aktif: false },
  { id: 10, nama: "Joko", kelas: "Data", nilai: 95, aktif: true },
];

// Tampilkan peserta aktif
console.log("=== PESERTA AKTIF ===");
const pesertaAktif = peserta.filter((p) => p.aktif);
console.log(pesertaAktif);

// Urutkan peserta berdasarkan nama
console.log("=== PESERTA TERURUT ===");
const pesertaUrut = [...peserta].sort((a, b) =>
  a.nama.localeCompare(b.nama)
);
console.log(pesertaUrut);

// Cari peserta berdasarkan ID
console.log("=== CARI PESERTA ===");
const cariPesertaById = peserta.find((p) => p.id === 2);

if (cariPesertaById) {
  console.log("Peserta ditemukan:", cariPesertaById);
} else {
  console.log("Peserta tidak ditemukan");
}

// Hitung jumlah peserta per kelas
console.log("=== JUMLAH PER KELAS ===");
const jumlahKelas = {};

for (const p of peserta) {
  jumlahKelas[p.kelas] = (jumlahKelas[p.kelas] || 0) + 1;
}

console.log(jumlahKelas);


// Tambah, Ubah, dan Hapus peserta (push, perubahan properti, Filter atau Splice)
// Tambah peserta
console.log("=== TAMBAH PESERTA ===");
peserta.push({
  id: 11,
  nama: "Kiki",
  kelas: "Web",
  nilai: 87,
  aktif: true,
});

console.log(`Setelah Menambah Peserta:`,peserta);

// Ubah properti peserta
const pesertaToUpdate = peserta.find((p) => p.id === 1);

if (pesertaToUpdate) {
  pesertaToUpdate.nilai = 95;
}

console.log(`Setelah Mengubah Nilai Peserta:`, peserta);

// Hapus peserta 
const pesertaToDelete = peserta.filter((p) => p.id !== 3);
console.log(pesertaToDelete);{
  const index = peserta.indexOf(pesertaToDelete);
  peserta.splice(index, 1);
  }
console.log(`Setelah Menghapus Peserta:`, peserta)

// Ubah array menjadi objek berdasarkan ID
const pesertaById = peserta.reduce((hasil, p) => {
  hasil[p.id] = p;
  return hasil;
}, {});

console.log(pesertaById[5]);
