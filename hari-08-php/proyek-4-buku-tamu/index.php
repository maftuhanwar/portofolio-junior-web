<?php
declare(strict_types=1);

require_once __DIR__ . '/functions.php';

$nama = '';
$email = '';
$pesan = '';
$galat = [];
$berhasil = false;


if (
    $_SERVER['REQUEST_METHOD'] === 'POST'
    && ($_POST['aksi'] ?? '') === 'hapus'
) {
    $idHapus = (string) ($_POST['id'] ?? '');
    $daftarTamu = bacaTamu();
    $daftarBaru = hapusTamu($daftarTamu, $idHapus);

    if (count($daftarBaru) < count($daftarTamu)) {
        simpanTamu($daftarBaru);
    }

    header('Location: index.php');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nama = bersihkanSpasi(trim((string) ($_POST['nama'] ?? '')));
    $email = trim((string) ($_POST['email'] ?? ''));
    $pesan = trim((string) ($_POST['pesan'] ?? ''));

    $galat = validasiTamu($nama, $email, $pesan);

    if ($galat === []) {
        $daftarTamu = bacaTamu();
        $daftarTamu = tambahTamu($daftarTamu, $nama, $email, $pesan);

        if (simpanTamu($daftarTamu)) {
            $berhasil = true;
            $nama = '';
            $email = '';
            $pesan = '';
        } else {
            $galat['umum'] = 'Data gagal disimpan. Periksa folder data.';
        }
    }
}

$daftarTamu = bacaTamu();
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Buku Tamu</title>
</head>
<body>
    <h1>Buku Tamu</h1>
    <p>Silakan isi nama, email, dan pesan kamu.</p>

    <?php if ($berhasil): ?>
        <p style="color: green;">Pesan berhasil disimpan!</p>
    <?php endif; ?>

    <?php if (isset($galat['umum'])): ?>
        <p><?= e($galat['umum']) ?></p>
    <?php endif; ?>

    <form method="post" action="index.php">
        <p>
            <label for="nama">Nama</label><br>
            <input type="text" id="nama" name="nama"
                   value="<?= e($nama) ?>">
            <?php if (isset($galat['nama'])): ?>
                <br><span><?= e($galat['nama']) ?></span>
            <?php endif; ?>
        </p>

        <p>
            <label for="email">Email</label><br>
            <input type="email" id="email" name="email"
                   value="<?= e($email) ?>">
            <?php if (isset($galat['email'])): ?>
                <br><span><?= e($galat['email']) ?></span>
            <?php endif; ?>
        </p>

        <p>
            <label for="pesan">Pesan</label><br>
            <textarea id="pesan" name="pesan" rows="4" cols="40"><?= e($pesan) ?></textarea>
            <?php if (isset($galat['pesan'])): ?>
                <br><span><?= e($galat['pesan']) ?></span>
            <?php endif; ?>
        </p>

        <button type="submit">Kirim Pesan</button>
    </form>

    <hr>

    <h2>Pesan Pengunjung</h2>

    <?php if ($daftarTamu === []): ?>
        <p>Belum ada pesan.</p>
    <?php else: ?>
        <?php foreach (array_reverse($daftarTamu) as $tamu): ?>
            <article>
                <h3><?= e((string) ($tamu['nama'] ?? '')) ?></h3>
                <p><?= nl2br(e((string) ($tamu['pesan'] ?? ''))) ?></p>
                <small>
                    <?= e((string) ($tamu['waktu'] ?? '')) ?>
                </small>
                
<form method="post" action="index.php">
    <input type="hidden" name="aksi" value="hapus">
    <input
        type="hidden"
        name="id"
        value="<?= e((string) ($tamu['id'] ?? '')) ?>"
    >
    <button type="submit">Hapus Pesan</button>
</form>
                <hr>
            </article>
        <?php endforeach; ?>
    <?php endif; ?>
</body>
</html>
