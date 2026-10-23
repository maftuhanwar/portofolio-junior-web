
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
const NILAI_MIN = 0;
const NILAI_MAKS = 100;
const BATAS_LULUS1 = 70;
async function main() {
const rl = readline.createInterface({ input, output });
const daftarNama = [];
const daftarNilai = [];
let jalan = true;
while (jalan) {
console.log('\n===== PENGOLAH NILAI =====');
console.log('1. Input nilai siswa');
console.log('2. Tampilkan statistik');
console.log('3. Tampilkan predikat per siswa');
console.log('4. Keluar');
const pilihan = await rl.question('Pilih menu (1-4): ');
switch (pilihan) {
case '1': {
const nama = (await rl.question('Nama siswa: ')).trim();
const nilai = Number(await rl.question('Nilai (0-100): '));
// TODO: validasi nama tidak kosong dan nilai 0-100 (Number.isNaN)
// TODO: jika valid, push ke daftarNama dan daftarNilai
break;
}
case '2': {
// TODO: jika kosong tampilkan pesan; jika ada hitung rata-rata,
// nilai tertinggi, dan nilai terendah dengan perulangan
break;
}
case '3': {
// TODO: for dengan indeks; tampilkan nama, nilai, grade A/B/C/D, Lulus/Tidak
lulus
break;
}
case '4':
jalan = false;
console.log('Terima kasih.');
break;
default:
console.log('Pilihan tidak valid.');
}
}
rl.close();
}
main();
const BATAS_LULUS = 70;
function hitungRataRata(daftar) {
if (daftar.length === 0) return 0;
return daftar.reduce((jumlah, n) => jumlah + n, 0) / daftar.length;
}
function cariTertinggi(daftar) {
return daftar.length === 0 ? null : Math.max(...daftar);
}
function cariTerendah(daftar) {
return daftar.length === 0 ? null : Math.min(...daftar);
}
function tentukanGrade(nilai) {
if (nilai >= 85) return 'A';
if (nilai >= 70) return 'B';
if (nilai >= 55) return 'C';
return 'D';
}
function tentukanStatus(nilai) {
return nilai >= BATAS_LULUS ? 'Lulus' : 'Tidak lulus';
}
function nilaiValid(nilai) {

    return Number.isFinite(nilai) && nilai >= 0 && nilai <= 100;
}
function jalankanPengujian() {
    console.assert(hitungRataRata([80, 90]) === 85, 'rata-rata 80,90 harus 85');
    console.assert(hitungRataRata([]) === 0, 'rata-rata array kosong harus 0');
    console.assert(tentukanGrade(85) === 'A', 'nilai 85 harus A');
    console.assert(tentukanGrade(69) === 'C', 'nilai 69 harus C');
    console.assert(nilaiValid(101) === false, '101 tidak valid');
 }

 function tampilkanMenu() {
    console.log("===APLIKASI PENGOLAH NILAI ===");
    console.log("1. Input & Analisis Nilai Siswa");
    console.log("--------------------------------");
 }
 function tampilkanLaporan(nama, nilailist){
    console.log(`\n--- Laporan: ${nama}---`);

    if ((nilailist.every(nilaiValid))) {
        console.log("Peringatan: Terdapat nilai tidak valid!");
        return;
    }
    const rataRata = hitungRataRata(nilailist);

    console.log(`Nilai ${nilaiListjoin(', ')}`);
    console.log(`Rata-rata: ${rataRata.toFixed(2)}`);
    console.log(`Tertinggi: ${cariTertinggi(nilaiList)}`);
    console.log(`Terendah: ${cariTerendah(nilaiList)}`);
    console.log(`Grade: ${tentukanGrade(rataRata)}`);
    console.log(`Status: ${tentukanStatus(rataRata)}`);
    console.log("--------------------------------");
}

function main() {
    jalankanPengujian();
    tampilkanMenu();
    tampilkanLaporan("Budi Santoso", [80, 85, 90, 75, 88]);
}


main();