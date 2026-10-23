// Faktorial
const n = 5;
let faktorial = 1;
for (let i = 2; i <= n; i++) {
  faktorial *= i; // sama dengan faktorial = faktorial * 1
}
console.log(`${n}! = ${faktorial}`);
// Fibonacci 10 suku pertama
let a = 0;
let b = 1;
const hasil = [];
for (let i = 0; i < 10; i++) {
  hasil.push(a); // menambahkan nilai a ke array hasil
  [a, b] = [b, a + b]; // sama dengan a = b; b = a + b;
}
console.log(hasil.join(","));
// Bilangan prima sampai 50
for (let angka = 2; angka <= 50; angka++) {
  let prima = true;
  for (let pembagi = 2; pembagi * pembagi <= angka; pembagi++) {
    if (angka % pembagi === 0) {
      prima = false;
      break;
    }
  }
  if (prima) console.log(angka);
}