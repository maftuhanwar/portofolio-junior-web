
/*
//penentu bilangan ganjil, genap
1.  Penentu bilangan ganjil/genap dan positif/negatif/nol.
    0.start, let nilai, status1, status2
    1. input nilai
    2. if (nilai  % 2 ) === 0 {status1="genap"}else{status1="ganjil"}
    3. cetak (status1)
    4. if (nilai > 0) {status2="positif"} else
        if(nilai < 0) {status2 = "negatif"} else {status2="nol"}
    5. cetak (status2)
    6. end
*/
console.log("Aplikasi ganjil/genap dan positif/negatif");
let nilai, status1, status2;
nilai = -1;
if (nilai % 2 === 0) {
    status1 = "genap";
} else {
    status1 = "ganjil";
}
console.log(`Angka ${nilai} adalah bilangan ${status1}`);
if(nilai > 0) {
    status2 = "positif";
} else if (nilai < 0) {
    status2 = "negatif";
} else {
    status2 = "nol";
}
console.log(`dan Angka ${nilai} adalah bilangan ${status2}`);
console.log("\n");
/*
//Tarif parkir
2.  Tarif parkir: 2 jam pertama Rp3.000, tiap jam berikutnya Rp2.000, maksimum Rp15.000 per hari.
    0. start, let durasiJam, sisaJam, totalHari, bayar
    1.input durasiJam
    2.sisaJam=durasiJam%24
    3.totalHari=(durasiJam-sisaHari)/24
    4.if(sisaJam<=2){bayar=3000}else{bayar=3000+(sisaJam-2)*2000}
    5.if(bayar>=15000){bayar=15000}else{bayar=bayar}
    6.bayar=totalHari*15000+bayar
    7.cetak (bayar)
    8.end
*/
let durasiJam, sisaJam, totalHari, bayar;
durasiJam = 30;
sisaJam = durasiJam % 24;
totalHari = Math.floor (durasiJam / 24);
// totalHari = (durasiJam - sisaJam) / 24;
if (sisaJam <= 2) {
    bayar = 3000;
} else {
    bayar = 3000 + (sisaJam - 2) * 2000;
}
if (bayar > 15000) {
    bayar = 15000;
}
bayar = totalHari * 15000 + bayar;
console.log(`Aplikasi Tarif Parkir`)
console.log(`Anda parkir selama ${durasiJam} jam, yang perlu anda bayar sebenar nominal Rp${bayar}`);
console.log("\n");
/*
3.  Kalkulator sederhana dengan switch (+, -, *, /) dan penanganan pembagian dengan nol
    0.start, let nilai1,nilai2,pilih,hasil
    1.output("menu pilihan (+, -, *, /)")
    2.input(nilai1,nilai2,pilih)
    3.switch(pilih)
        case 1: hasil=nilai1+nilai2
        case 2: hasil=nilai1-nilai2
        case 3: hasil=nilai1*nilai2
        case 4: if(nilai2==0){hasil="tidak terdefinisi"}else{hasil=nilai1/nilai2}
    4.cetak (hasil)
    5.end
*/
let nilai1, nilai2, pilihOperator, hasil;

nilai1 = 10;
nilai2 = 2;
pilihOperator = "/";

switch (pilihOperator) {
  case "+":
    hasil = nilai1 + nilai2;
    break;

  case "-":
    hasil = nilai1 - nilai2;
    break;

  case "*":
    hasil = nilai1 * nilai2;
   break;

  case "/":
    if (nilai*  0) {
      hasil = "Tidak ter*efinisi";
    } else {
      hasil*= nilai1 / nilai2;
    }
    break

  default:
    hasil = "Operator*tidak valid";
}

console.log("Kalkulator sederhana");
console.log(`Hasil ${nilai1} ${pilihOperator} ${nilai2} adalah ${hasil}`);
/*
4.  Penentu kategori BMI (berat / (tinggi * tinggi)): kurang (di bawah 18,5), normal (18,5-24,9), lebih (25-29,9), obesitas (30 ke atas).
    0.start
    1.input (berat, tinggi)
    2.BMI = berat / (tinggi * tinggi)
    3. if(BMI<18,5){status="kurang"}else
            if(BMI<=24,9){status="normal"}else
                if(BMI<=29,9){status="lebih"}else{status="obesitas"}
    4.output(status)
    5.end
*/
let beratBadan, tinggiBadan, BMI, kondisi;
beratBadan = 57;
tinggiBadan = 1.48;
BMI = beratBadan / (tinggiBadan * tinggiBadan);
if (BMI < 18.5)  {
    kondisi = "kurang";
} else if (BMI <= 24.9) {
    kondisi = "normal";
} else if (BMI <= 29.9) {
    kondisi = "lebih";
} else {
    kondisi = "obesitas";
}
console.log("Aplikasi BMI")
console.log(`BMI dari berat badan ${beratBadan} dengan tinggi ${tinggiBadan} meter, maka status kesehatanmu ${kondisi}`);