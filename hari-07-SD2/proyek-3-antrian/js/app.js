const antrean = [];
let nomorAntrean = 1;

const inputNama = document.getElementById("nama");
const tombolTambah = document.getElementById("tambah");
const tombolLayani = document.getElementById("layani");
const daftar = document.getElementById("daftar");
const depan = document.getElementById("depan");
const jumlah = document.getElementById("jumlah");
const pesan = document.getElementById("pesan");

function tampilkanAntrean() {
    daftar.innerHTML = "";

    antrean.forEach((pengunjung) => {
        const item = document.createElement("li");
        item.textContent = `${pengunjung.nomor}. ${pengunjung.nama}`;
        daftar.appendChild(item);
    });

    depan.textContent = antrean.length === 0
        ? "Belum ada antrean."
        : `${antrean[0].nomor}. ${antrean[0].nama}`;

    jumlah.textContent = `Jumlah antrean: ${antrean.length}`;
}

tombolTambah.addEventListener("click", () => {
    const nama = inputNama.value.trim();

    if (nama === "") {
        pesan.textContent = "Masukkan nama pengunjung terlebih dahulu.";
        inputNama.focus();
        return;
    }

    antrean.push({
        nomor: nomorAntrean,
        nama: nama
    });

    nomorAntrean++;
    inputNama.value = "";
    pesan.textContent = "Antrean berhasil ditambahkan.";

    tampilkanAntrean();
});

tombolLayani.addEventListener("click", () => {
    if (antrean.length === 0) {
        pesan.textContent = "Antrean masih kosong.";
        return;
    }

    const dilayani = antrean.shift();

    pesan.textContent =
        `Nomor ${dilayani.nomor}, ${dilayani.nama}, telah dilayani.`;

    tampilkanAntrean();
});

tampilkanAntrean();