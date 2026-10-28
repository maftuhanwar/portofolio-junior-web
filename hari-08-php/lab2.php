<?php

declare(strict_types=1);
$peserta = [
    ['nama' => 'Sari', 'kelas' => 'Web', 'nilai' => 90],
    ['nama' => 'Budi', 'kelas' => 'Web', 'nilai' => 68],
    ['nama' => 'Citra', 'kelas' => 'Data', 'nilai' => 82],
];
// hitungRataRata(array $daftar):
// Float dan cariTertinggi(array $daftar); ?array
function hitungRataRata(array $daftar): float {
    $total = array_sum(array_column($daftar, 'nilai'));
    return $total / count($daftar);
}
function cariTertinggi(array $daftar): ?array {
    $maxNilai = max(array_column($daftar, 'nilai'));
    $result = array_filter($daftar, function($item)use ($maxNilai) {
    return $item['nilai'] === $maxNilai;
  });
  return array_values($result)[0]?? null;
}

echo '<h3>Hasil Fungsi <h3>';
$rataRata = hitungRataRata($peserta);
echo '<p>Rata-rata nilai:' . $rataRata . '<p>';
$tertinggi = cariTertinggi($peserta);
if ($tertinggi){
    echo '<p>Peserta dengan nilai tertinggi: ' .$tertinggi['nama']. ' adalah ' . $tertinggi['nilai']. '</p>';
} else {
    echo '<p> Tidak ada peserta.</p>';
}
// FilterLulus(array $peserta, in)
function filterNilaiLebihDari70(array $daftar): array {
    $result = array_filter($daftar, function($item){
        return $item['nilai'] > 70;
    });
    // array_values digunakan untuk mereset index array menjadi berurutan dari 0
    return array_values($result);
}

$hasilFilter = filterNilaiLebihDari70($peserta);
//print_r($hasilFilter)
foreach ($hasilFilter as $siswa){
    echo "Nama: " . $siswa['nama'] . "-Nilai;" . $siswa['nilai'] . "<br>";
}
//urutkanNilai(array $peserta): array dengan usort (kembalikan salinan). 
echo "<h3>Urutkan Nilai </h3>";
function urutkanNilai(array $peserta): array
{
    // Membuat salinan array
    $salinanPeserta = $peserta;

    // Mengurutkan salinan menggunakan usort
    usort($salinanPeserta, function ($a, $b) {
        // Mengurutkan dari nilai terbesar ke terkecil (Descending)
        // Jika ingin dari terkecil ke terbesar, gunakan: return $a['nilai'] <=> $b['nilai'];
        return $b['nilai'] <=> $a['nilai'];
    });

    return $salinanPeserta;
}
$pesertaTelahDiurutkan = urutkanNilai($peserta);
//echo "<p>".print_r($pesertaTelahDiurutkan)."<p>";
// Mencetak hasilnya
foreach ($pesertaTelahDiurutkan as $p) {
    echo "Nama: " . $p['nama'] .  " | Nilai: " . $p['nilai'] . "<br>";
}
//kelompokkan PerKelas(array $peserta): array yang menghasilkan ['Web' => [...], 'Data' => [...]].
function kelompokkanPerKelas(array $peserta): array {
    $hasil = [];
    
    foreach ($peserta as $p) {
        $kelas = $p['kelas'];
        // Memasukkan data peserta ke dalam array berdasarkan nama kelasnya
        $hasil[$kelas][] = $p;
    }
    return $hasil;
}

$dataPerKelas = kelompokkanPerKelas($peserta);
foreach ($dataPerKelas as $namaKelas => $daftarPeserta) { 
        // Cetak nama kelas sebagai judul (Heading)
        echo "<h3>Kelas " . $namaKelas . "</h3>";
        // Buat list HTML
        echo "<ul>";
        // Perulangan dalam: Mengambil setiap peserta di dalam kelas tersebut
        foreach ($daftarPeserta as $siswa) {
            echo "<li>Nama:" . $siswa['nama'] . " | Nilai: " . $siswa['nilai'] . "</li>";
        }
        // Tutup list HTML
        echo "</ul>";
        echo "<hr>"; // Garis pemisah antar kelas
    }

    foreach ($dataPerKelas as $namaKelas => $daftarPeserta) { 
        // Cetak nama kelas sebagai judul (Heading)
        echo "<h3>Kelas " . $namaKelas . "</h3>";
        // Buat list HTML
        echo "<table border='1'>";
        // Perulangan dalam: Mengambil setiap peserta di dalam kelas tersebut
        echo "<tr><th>Nama</th><th>Nilai</th></tr>";
        foreach ($daftarPeserta as $siswa) {
            echo "<tr><td>". htmlspecialchars($siswa['nama']) ."</td><td>" . $siswa['nilai'] . "</td></tr>";
        }
        // Tutup list HTML
        echo "</table>";
        echo "<hr>"; // Garis pemisah antar kelas
    }

//Tampilkan hasil dalam tabel HTML berisi nomor, nama, kelas, nilai, dan grade. Semua output di-escape dengan htmlspecialchars.

function tentukanGrade(int $nilai): string
{
    return match (true) {
        $nilai >= 85 => 'A',
        $nilai >= 70 => 'B',
        $nilai >= 55 => 'C',
        default => 'D',
    };
}

echo '<h3>Tabel Nilai Peserta</h3>';

echo '<table border="1" cellpadding="8" cellspacing="0">';
echo '<thead>';
echo '<tr>';
echo '<th>No</th>';
echo '<th>Nama</th>';
echo '<th>Kelas</th>';
echo '<th>Nilai</th>';
echo '<th>Grade</th>';
echo '</tr>';
echo '</thead>';
echo '<tbody>';

foreach ($peserta as $index => $siswa) {
    echo '<tr>';

    echo '<td>' . ($index + 1) . '</td>';
    echo '<td>' . htmlspecialchars($siswa['nama'], ENT_QUOTES, 'UTF-8') . '</td>';
    echo '<td>' . htmlspecialchars($siswa['kelas'], ENT_QUOTES, 'UTF-8') . '</td>';
    echo '<td>' . htmlspecialchars((string) $siswa['nilai'], ENT_QUOTES, 'UTF-8') . '</td>';
    echo '<td>' . htmlspecialchars(tentukanGrade((int) $siswa['nilai']), ENT_QUOTES, 'UTF-8') . '</td>';

    echo '</tr>';
}

echo '</tbody>';
echo '</table>';
