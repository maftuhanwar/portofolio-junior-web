-- Membuat Database
CREATE DATABASE IF NOT EXISTS db_pelatihan CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE db_pelatihan;

-- Tabel Kelas
CREATE TABLE IF NOT EXISTS kelas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_kelas VARCHAR(100) NOT NULL,
    kuota INT NOT NULL DEFAULT 30
) ENGINE=InnoDB;

-- Tabel Pendaftar
CREATE TABLE IF NOT EXISTS pendaftar (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    no_hp VARCHAR(20) NOT NULL,
    alamat TEXT NULL,
    kelas_id INT NOT NULL,
    tgl_daftar TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_pendaftar_kelas FOREIGN KEY (kelas_id) REFERENCES kelas (id)
        ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- Indeks Pencarian Nama
CREATE INDEX idx_pendaftar_nama ON pendaftar (nama);

-- Dummy Data Kelas
INSERT INTO kelas (nama_kelas, kuota) VALUES 
('Web Programming', 30),
('Desain Grafis', 25),
('Digital Marketing', 20);

-- Dummy Data Pendaftar (Min. 8 data dengan beberapa nama serupa untuk uji pencarian)
INSERT INTO pendaftar (nama, email, no_hp, alamat, kelas_id) VALUES
('Sari Anggraini', 'sari@gmail.com', '081234567890', 'Surakarta', 1),
('Ananda Putra', 'ananda@gmail.com', '081234567891', 'Jogja', 1),
('Budi Santoso', 'budi@gmail.com', '081234567892', 'Semarang', 2),
('Andi Wijaya', 'andi@gmail.com', '081234567893', 'Surakarta', 2),
('Siti Farah', 'siti@gmail.com', '081234567894', 'Boyolali', 1),
('Rian Perkasa', 'rian@gmail.com', '081234567895', 'Klaten', 3),
('Annisa Maharani', 'annisa@gmail.com', '081234567896', 'Surakarta', 3),
('Dian Kusuma', 'dian@gmail.com', '081234567897', 'Sragen', 1);

CREATE TABLE admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    dibuat_pada TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE INDEX idx_pendaftar_nama ON pendaftar (nama);