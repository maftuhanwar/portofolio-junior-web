<?php

declare(strict_types=1);

const FILE_TAMU = __DIR__ . '/data/tamu.json';
const MAKS_PESAN = 500;

function e(string $teks): string
{
    return htmlspecialchars($teks, ENT_QUOTES, 'UTF-8');
}

function bersihkanSpasi(string $teks): string
{
    return trim((string) preg_replace('/\s+/', ' ', $teks));
}

function validasiTamu(string $nama, string $email, string $pesan): array
{
    $galat = [];

    if ($nama === '') {
        $galat['nama'] = 'Nama wajib diisi.';
    } elseif (mb_strlen($nama) < 2) {
        $galat['nama'] = 'Nama minimal 2 karakter.';
    }

    if ($email === '') {
        $galat['email'] = 'Email wajib diisi.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $galat['email'] = 'Format email tidak valid.';
    }

    if ($pesan === '') {
        $galat['pesan'] = 'Pesan wajib diisi.';
    } elseif (mb_strlen($pesan) > MAKS_PESAN) {
        $galat['pesan'] = 'Pesan maksimal 500 karakter.';
    }

    return $galat;
}

function bacaTamu(): array
{
    $folderData = dirname(FILE_TAMU);

    if (!is_dir($folderData)) {
        if (!mkdir($folderData, 0755, true) && !is_dir($folderData)) {
            return [];
        }
    }

    if (!file_exists(FILE_TAMU)) {
        return [];
    }

    $isi = file_get_contents(FILE_TAMU);

    if ($isi === false || trim($isi) === '') {
        return [];
    }

    $data = json_decode($isi, true);

    if (json_last_error() !== JSON_ERROR_NONE || !is_array($data)) {
        return [];
    }

    return $data;
}

function simpanTamu(array $daftarTamu): bool
{
    $folderData = dirname(FILE_TAMU);

    if (!is_dir($folderData)) {
        if (!mkdir($folderData, 0755, true) && !is_dir($folderData)) {
            return false;
        }
    }

    $json = json_encode(
        $daftarTamu,
        JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE
    );

    if ($json === false) {
        return false;
    }

    return file_put_contents(FILE_TAMU, $json, LOCK_EX) !== false;
}

function tambahTamu(array $daftarTamu, string $nama, string $email, string $pesan): array
{
    $tamuBaru = [
        'id' => uniqid('tamu_', true),
        'nama' => bersihkanSpasi($nama),
        'email' => bersihkanSpasi($email),
        'pesan' => trim($pesan),
        'waktu' => date('Y-m-d H:i:s'),
    ];

    $daftarTamu[] = $tamuBaru;

    return $daftarTamu;
}

function hapusTamu(array $daftarTamu, string $id): array
{
    $hasil = [];

    foreach ($daftarTamu as $tamu) {
        if (($tamu['id'] ?? '') !== $id) {
            $hasil[] = $tamu;
        }
    }

    return $hasil;
}
