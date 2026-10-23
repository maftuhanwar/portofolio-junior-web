// fungsi rata-rata
export function hitungRataRata(data) {
  const total = data.reduce((jumlah, nilai) => {
    return jumlah + nilai;
  }, 0);

  return total / data.length;
}

// fungsi tertinggi
export function cariTertinggi(data) {
  return Math.max(...data);
}

// fungsi terendah
export function cariTerendah(data) {
  return Math.min(...data);
}