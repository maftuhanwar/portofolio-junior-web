<?php
// filepath: c:\xampp\htdocs\portofolio-junior-web\hari-10-lib\proyek-5-capstone-pendaftaran\public\admin.php
declare(strict_types=1);

require_once __DIR__ . '/../src/bootstrap.php';
cekLoginAdmin();

$pdo = getConnection();
$kata = trim((string) ($_GET['q'] ?? ''));
$perHalaman = 10;
$total = hitungPendaftar($pdo, $kata);
$jumlahHalaman = max(1, (int) ceil($total / $perHalaman));
$halaman = min($jumlahHalaman, max(1, (int) ($_GET['hal'] ?? 1)));
$daftar = ambilPendaftar($pdo, $kata, $perHalaman, ($halaman - 1) * $perHalaman);

$judul = 'Daftar Pendaftar';
require __DIR__ . '/../templates/header.php';
?>

<main class="container py-4">
  <div class="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
    <div>
      <h1 class="h3 mb-1">Daftar Pendaftar</h1>
      <p class="text-muted mb-0">Total <?= (int) $total ?> pendaftar</p>
    </div>

    <form method="get" class="d-flex gap-2" role="search">
      <label class="visually-hidden" for="q">Cari nama</label>
      <input
        id="q"
        name="q"
        type="search"
        class="form-control"
        placeholder="Cari nama..."
        value="<?= e($kata) ?>"
      >
      <button type="submit" class="btn btn-primary">Cari</button>
      <?php if ($kata !== ''): ?>
        <a href="admin.php" class="btn btn-outline-secondary">Reset</a>
      <?php endif; ?>
    </form>
  </div>

  <?php if ($daftar === []): ?>
    <div class="alert alert-info mb-0">Tidak ada data pendaftar.</div>
  <?php else: ?>
    <div class="card shadow-sm">
      <div class="table-responsive">
        <table class="table table-striped table-hover align-middle mb-0">
          <thead class="table-light">
            <tr>
              <th scope="col">Nama</th>
              <th scope="col">Email</th>
              <th scope="col">No. HP</th>
              <th scope="col">Kelas</th>
              <th scope="col" class="text-end">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <?php foreach ($daftar as $p): ?>
              <tr>
                <td><?= e($p['nama']) ?></td>
                <td><?= e($p['email']) ?></td>
                <td><?= e($p['no_hp']) ?></td>
                <td><?= e($p['nama_kelas']) ?></td>
                <td>
                  <div class="d-flex justify-content-end flex-wrap gap-2">
                    <a
                      class="btn btn-sm btn-outline-secondary"
                      href="ubah.php?id=<?= (int) $p['id'] ?>"
                    >Ubah</a>

                    <a
                      class="btn btn-sm btn-outline-primary"
                      href="cetak.php?id=<?= (int) $p['id'] ?>"
                      target="_blank"
                      rel="noopener"
                    >Cetak</a>

                    <form method="post" action="hapus.php" class="d-inline">
                      <input type="hidden" name="csrf" value="<?= e(tokenCsrf()) ?>">
                      <input type="hidden" name="id" value="<?= (int) $p['id'] ?>">
                      <button type="submit" class="btn btn-sm btn-outline-danger">
                        Hapus
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            <?php endforeach; ?>
          </tbody>
        </table>
      </div>
    </div>

    <?php if ($jumlahHalaman > 1): ?>
      <nav class="mt-4" aria-label="Navigasi halaman">
        <ul class="pagination justify-content-center flex-wrap">
          <?php for ($i = 1; $i <= $jumlahHalaman; $i++): ?>
            <?php $url = 'admin.php?' . http_build_query(['hal' => $i, 'q' => $kata]); ?>
            <li class="page-item <?= $i === $halaman ? 'active' : '' ?>">
              <a
                class="page-link"
                href="<?= e($url) ?>"
                <?= $i === $halaman ? 'aria-current="page"' : '' ?>
              ><?= $i ?></a>
            </li>
          <?php endfor; ?>
        </ul>
      </nav>
    <?php endif; ?>
  <?php endif; ?>
</main>

<?php require __DIR__ . '/../templates/footer.php'; ?>