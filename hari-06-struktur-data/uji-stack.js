import { Stack } from "./structures.js";

const tumpukan = new Stack();

console.log("=== UJI STACK ===");

tumpukan.push("A");
tumpukan.push("B");
tumpukan.push("C");

console.log("Isi tumpukan:", tumpukan.items);
console.log("Ukuran:", tumpukan.size());
console.log("Elemen teratas:", tumpukan.peek());

console.log("Pop:", tumpukan.pop());
console.log("Pop:", tumpukan.pop());
console.log("Pop:", tumpukan.pop());

console.log("Apakah kosong:", tumpukan.isEmpty());
console.log("Pop saat kosong:", tumpukan.pop());
console.log("Ukuran akhir:", tumpukan.size());
