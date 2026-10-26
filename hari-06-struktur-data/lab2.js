
 // LAB 2 - MAP DAN SET

// Menghitung frekuensi kata menggunakan Map

const kalimat = "saya belajar web saya suka web";
const kataArray = kalimat.split(' ');
const frekuensi = new Map();

kataArray.forEach(kata => {
    frekuensi.set(kata, (frekuensi.get(kata) || 0) + 1);
});

const frekuensiUrut = [...frekuensi.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([kata, jumlah]) => `${kata}: ${jumlah}`);

console.log("Frekuensi kata (Terurut):", frekuensiUrut);

// Jumlah semua kata dalam kalimat

const jumlahKata = kataArray.length;
console.log("Jumlah Kata:", jumlahKata);

// Menghilangkan duplikat email menggunakan Set

const email = [
    "sari@gmail.com",
    "budi@gmail.com",
    "sari@gmail.com",
    "citra@gmail.com",
    "budi@gmail.com",
];

console.log("Sebelum:", email);

const emailUnik = [...new Set(email)];
console.log("Sesudah:", emailUnik);

// Mencari irisan dua daftar peserta menggunakan Set

const kelasA = ["Sari", "Budi", "Citra", "Dina"];
const kelasB = ["Citra", "Dina", "Eko", "Fani"];

const setKelasA = new Set(kelasA);
const irisan = kelasB.filter((nama) => setKelasA.has(nama));

console.log("Peserta yang ada di kedua kelas:", irisan);

// Fungsi untuk memeriksa duplikat

function adaDuplikat(daftar) {
    return new Set(daftar).size !== daftar.length;
}

// Uji fungsi adaDuplikat

console.log("Array kosong:", adaDuplikat([]));
console.log("Satu elemen:", adaDuplikat(["Sari"]));
console.log("Ada duplikat:", adaDuplikat(["Sari", "Budi", "Sari"]));
console.log("Tidak ada duplikat:", adaDuplikat(["Sari", "Budi", "Citra"]));
