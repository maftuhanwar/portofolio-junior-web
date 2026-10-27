import { BinarySearchTree } from "./structures.js";
const folder = {
  nama: "proyek",
  anak: [
    { nama: "css", anak: [] },
    { nama: "js", anak: [{ nama: "app.js", anak: [] }] },
  ],
};
function cetakPohon(node, tingkat = 0) {
  console.log(" ".repeat(tingkat * 2) + node.nama);
  for (const anak of node.anak) {
    cetakPohon(anak, tingkat + 1);
  }
}

// Jalankan Cetak Pohon dan hitung
// tambahkan fungsi
// yang mengembalikan jalutr lengkap, mis.proyek/js/app.js.
function hitungNode(node) {
  let total = 1;
  for (const anak of node.anak) total += hitungNode(anak);
  return total;
}
function cariNode(node, nama) {
  if (node.nama === nama) {
    return [node.nama];
  }
  for (const anak of node.anak) {
    const jalur = cariNode(anak, nama);
    if (jalur) {
    }
  }
  return undefined;
}

cetakPohon(folder);
console.log("Total node:", hitungNode(folder));
console.log("jalur ke app.js:", cariNode(folder, "app.js"));

// Masukkan data [50, 30, 70, 20, 40, 60, 80] ke BinarySearchTree;
// cetak inOrder() dan uji has(60) dan has(65). Gambar pohon hasilnya.
const bst = new BinarySearchTree();
const data = [50, 30, 70, 20, 40, 60, 80];
data.forEach((num) => bst.insert(num));
console.log("In-order traversal:", bst.inOrder());
console.log("Has 60:", bst.has(60));
console.log("Has 65:", bst.has(65));

// Gambarkan pohon hasilnya
console.log(`
        50
       /  \\
      30   70
     / \\   / \\
    20 40 60 80
`);

// GRAPH - ADJACENCY LIST
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }

  bfs(start) {
    const visited = new Set();
    const queue = [start];
    const hasil = [];

    visited.add(start);

    while (queue.length > 0) {
      const vertex = queue.shift();
      hasil.push(vertex);

      for (const tetangga of this.adjacencyList.get(vertex) || []) {
        if (!visited.has(tetangga)) {
          visited.add(tetangga);
          queue.push(tetangga);
        }
      }
    }

    return hasil;
  }

  dfs(start) {
    const visited = new Set();
    const hasil = [];

    const kunjungi = (vertex) => {
      visited.add(vertex);
      hasil.push(vertex);

      for (const tetangga of this.adjacencyList.get(vertex) || []) {
        if (!visited.has(tetangga)) {
          kunjungi(tetangga);
        }
      }
    };

    if (this.adjacencyList.has(start)) {
      kunjungi(start);
    }

    return hasil;
  }

  jarakTerpendek(start, tujuan) {
    const queue = [[start, 0]];
    const visited = new Set([start]);

    while (queue.length > 0) {
      const [vertex, jarak] = queue.shift();

      if (vertex === tujuan) {
        return jarak;
      }

      for (const tetangga of this.adjacencyList.get(vertex) || []) {
        if (!visited.has(tetangga)) {
          visited.add(tetangga);
          queue.push([tetangga, jarak + 1]);
        }
      }
    }

    return -1;
  }
}

// Membuat graf 6 kota
const graph = new Graph();

graph.addEdge("Solo", "Karanganyar");
graph.addEdge("Solo", "Sukoharjo");
graph.addEdge("Karanganyar", "Sragen");
graph.addEdge("Sukoharjo", "Klaten");
graph.addEdge("Sragen", "Klaten");

// Pengujian
console.log("BFS:", graph.bfs("Solo"));
console.log("DFS:", graph.dfs("Solo"));
console.log(
  "Jarak terpendek Solo ke Klaten:",
  graph.jarakTerpendek("Solo", "Klaten"),
);
