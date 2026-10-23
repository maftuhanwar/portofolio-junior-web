// DATA PESERTA
const peserta = [
  {
    nama: "Andi",
    kelas: "A",
    nilai: 85,
    email: "andi@gmail.com"
  },
  {
    nama: "Budi",
    kelas: "A",
    nilai: 70,
    email: "budi@gmail.com"
  },
  {
    nama: "Citra",
    kelas: "B",
    nilai: 92,
    email: "citra@gmail.com"
  },
  {
    nama: "Dewi",
    kelas: "B",
    nilai: 65,
    email: "dewi@gmail.com"
  },
  {
    nama: "Eko",
    kelas: "A",
    nilai: 78,
    email: "eko@gmail.com"
  },
  {
    nama: "Farah",
    kelas: "B",
    nilai: 88,
    email: "farah@gmail.com"
  },
  {
    nama: "Gilang",
    kelas: "A",
    nilai: 55,
    email: "gilang@gmail.com"
  },
  {
    nama: "Hani",
    kelas: "B",
    nilai: 95,
    email: "hani@gmail.com"
  }
];
//Daftar nama peserta yang lulus
const pesertaLulus = peserta
  .filter(p => p.nilai >= 70)
  .map(p => p.nama);

console.log("Peserta yang lulus:");
console.log(pesertaLulus);

console.log();

//Rata-rata nilai per kelas.
const kelasA = peserta.filter(p => p.kelas === "A");
const kelasB = peserta.filter(p => p.kelas === "B");

const rataA =
  kelasA.reduce((total, p) => total + p.nilai, 0) /
  kelasA.length;

const rataB =
  kelasB.reduce((total, p) => total + p.nilai, 0) /
  kelasB.length;

console.log(`Rata-rata kelas A = ${rataA.toFixed(2)}`);
console.log(`Rata-rata kelas B = ${rataB.toFixed(2)}`);

console.log();

//Peserta dengan nilai tertinggi (reduce atau sort).
 const nilaiTertinggi = peserta.reduce((tertinggi, p) => {
  return p.nilai > tertinggi.nilai ? p : tertinggi;
});

console.log("Peserta dengan nilai tertinggi:");
console.log(
  `${nilaiTertinggi.nama} - Nilai ${nilaiTertinggi.nilai}`
);

console.log();

//Pencarian peserta berdasarkan sebagian nama 
const keyword = "an";

const hasilCari = peserta.filter(p =>
  p.nama.toLowerCase().includes(keyword.toLowerCase())
);

console.log(`Hasil pencarian "${keyword}":`);

hasilCari.forEach(p => {
  console.log(`${p.nama} - ${p.nilai}`);
});

console.log();

//Daftar peringkat
const peringkat = [...peserta]
  .sort((a, b) => b.nilai - a.nilai);

peringkat.forEach((p, index) => {
  console.log(
    `${index + 1}. ${p.nama} - ${p.nilai}`
  );
});

console.log();

//Menghapus duplikat dari array email memakai new Set
const daftarEmail = [
  "andi@gmail.com",
  "budi@gmail.com",
  "andi@gmail.com",
  "hani@gmail.com",
  "budi@gmail.com",
  "eko@gmail.com"
];

const emailUnik = [...new Set(daftarEmail)];

console.log("Daftar email unik:");
console.log(emailUnik);
