SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `siswa` (
  `id` int(11) NOT NULL,
  `nis` varchar(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `jenis_kelamin` varchar(10) NOT NULL,
  `telp` varchar(15) NOT NULL,
  `alamat` text NOT NULL,
  `foto` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;


-- Insert data ke dalam tabel siswa
INSERT INTO siswa (id, nis, nama, jenis_kelamin, telp, alamat, foto)
VALUES
(1, '5025211001', 'Budi Santoso', 'Laki-Laki', '08123456789', 'Jalan Mangga No. 123', '1.jpg'),
(2, '5025211002', 'Siti Rahayu', 'Perempuan', '08234567890', 'Jalan Durian No. 456', '2.jpg'),
(3, '5025211003', 'Ahmad Wijaya', 'Laki-Laki', '08345678901', 'Jalan Rambutan No. 789', '3.jpg'),
(4, '5025211004', 'Lina Marwah', 'Perempuan', '08456789012', 'Jalan Pisang No. 1011', '4.jpg');


ALTER TABLE `siswa`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `siswa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;
