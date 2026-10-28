<?php

declare(strict_types=1);

date_default_timezone_set('Asia/Jakarta');
$nama = 'Sari';
$umur =25;
$status = 'janda';

echo 'Halo, saya ' . $nama . ' umur saya '.$umur. ' tahun. status saya ' .$status. '!<br>';

// Tampilkan var_dump tiap variable
echo '<h3>var dump</h3>';
    var_dump($nama);
    echo ' | ';
    var_dump($umur);
    echo ' | ';
    var_dump($status);


// Buat table perkalian 1 sampai 10 dalam <table> dengan for bersarang
echo '<table border="1">';
for ($i = 1; $i <= 10; $i++) {
    echo '<tr>';
    for ($j = 1; $j <= 10; $j++) {
        echo '<td>' . ($i * $j) . '</td>';
    }
    echo '</tr>';
}
echo '</table>';

// bilangan ganjil 1-20

echo '<h3>Bilangan Ganjil dan Genap 1-20 </h3>';
echo '<p>Ganjil: ';
for ($i = 1; $i <= 20; $i += 2) {
    echo $i . ' ';
}
echo '</p>';

// Bilangan genap 1-20
echo '<p>Genap: ';
for ($i = 2; $i <= 20; $i += 2) {
    echo $i . ' ';
}
echo '</p>';

// FizzBuzz 1-30

echo '<h3>FizzBuzz 1-30</h3>';
for ($i = 1; $i <= 30; $i++) {

    if ($i % 3 == 0 && $i % 5 == 0) {
        echo 'FizzBuzz<br>';
    } elseif ($i % 3 == 0) {
        echo 'Fizz<br>';
    } elseif ($i % 5 == 0) {
        echo 'Buzz<br>';
    } else {
        echo $i . '<br>';
    }
}


// Konversi Nilai ke Grade menggunakan match
echo '<h3>Konversi Nilai ke Grade </h3>';
$nilai = 85;

$grade = match (true) {
    $nilai >= 90 => 'A',
    $nilai >= 80 => 'B',
    $nilai >= 70 => 'C',
     default => 'D',
};
echo 'Nilai: ' . $nilai . '<br>';
echo 'Grade: ' . $grade;

// Jalankan program kalender sederhana: tampilkan hari ini dengan nama hari berbahasa Indonesia
$hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
$hariIni = date('w');
echo '<h3>Kalender Sederhana</h3>';
echo 'Hari ini adalah ' . $hari[$hariIni] . '<br>';
echo 'Tanggal: ' . date('d-m-Y');
?>
<p>Waktu server: <?= date('d-m-Y H:i') ?> WIB</p>;

//
