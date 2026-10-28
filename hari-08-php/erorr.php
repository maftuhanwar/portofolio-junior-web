<?php
declare(strict_types=1);

$folderData = __DIR__ . '/data';
$jalurJson = $folderData . '/peserta.json';

// 1. Periksa folder data
if (!is_dir($folderData)) {
    if (!mkdir($folderData, 0755, true) && !is_dir($folderData)) {
        exit('Error: folder data gagal dibuat.');
    }
}

// 2. Periksa apakah file JSON tersedia
if (!file_exists($jalurJson)) {
    exit('Error: file peserta.json tidak ditemukan.');
}

// 3. Periksa apakah file bisa dibaca
if (!is_readable($jalurJson)) {
    exit('Error: file peserta.json tidak bisa dibaca.');
}

// 4. Baca isi file JSON
$isiJson = file_get_contents($jalurJson);

if ($isiJson === false) {
    exit('Error: gagal membaca file JSON.');
}

// 5. Periksa format JSON
$peserta = json_decode($isiJson, true);

if (json_last_error() !== JSON_ERROR_NONE || !is_array($peserta)) {
    exit('Error: format JSON tidak valid.');
}

// 6. Tampilkan data peserta
echo '<h2>Data Peserta</h2>';

foreach ($peserta as $item) {
    echo '<p>'
        . htmlspecialchars((string) ($item['nama'] ?? ''), ENT_QUOTES, 'UTF-8')
        . ' | '
        . htmlspecialchars((string) ($item['kelas'] ?? ''), ENT_QUOTES, 'UTF-8')
        . ' | '
        . htmlspecialchars((string) ($item['nilai'] ?? ''), ENT_QUOTES, 'UTF-8')
        . '</p>';
}
