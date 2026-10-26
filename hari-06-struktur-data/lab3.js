import { Stack } from "./structures.js";
export function kurungSeimbang(teks) {
  const pasangan = { ")": "(", "]": "[", "}": "{" };
  const tumpukan = new Stack();

  for (const karakter of teks) {
    if ("([{".includes(karakter)) {
      tumpukan.push(karakter);
    } else if (karakter in pasangan) {
      if (tumpukan.isEmpty() || tumpukan.pop() !== pasangan[karakter]) {
        return false;
      }
    }
  }
  return tumpukan.isEmpty();
}

// Uji dengan push tiga elemen, peek, pop sampai kosong, lalu pop pada stack kososng (tidak
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop()); 

// mengimplementasikan validasi tanda kurung seimbang

console.log(kurungSeimbang("(a+b)*[c-d]")); // true
console.log(kurungSeimbang("(a+b]")); // false
console.log(kurungSeimbang("((a)")); // false
console.log(kurungSeimbang(''));    // true
console.log(kurungSeimbang(`({[(a-+b]})`)); // false

// Balik sebuah string memakai Stack, dan periksa palindrom
stack.clear();
const str = `katak`;
const reversedStr = str.split('').reduce((acc, char)=>{
    stack.push(char);
    return acc + char;
}, '');
const isPlindrome = str === reversedStr.split('').reverse().join('');
console.log(`String: ${str}, Reversed: ${reversedStr}, Is Palindrome: ${isPlindrome}`);
