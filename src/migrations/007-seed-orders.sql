insert into public.orders (order_id, customer_name, status, payment_url, table_id, created_at, updated_at) values
('ORD-00031', 'Budi Santoso', 'process', null, 31, now(), now()),
('ORD-00032', 'Siti Aminah', 'cancel', null, 32, now(), now()),
('ORD-00033', 'Agus Pratama', 'settled', null, 33, now(), now()),
('ORD-00034', 'Dewi Lestari', 'process', null, 34, now(), now()),
('ORD-00035', 'Andi Wijaya', 'cancel', null, 35, now(), now()),
('ORD-00036', 'Nur Aisyah', 'settled', null, 36, now(), now()),
('ORD-00037', 'Rahmat Hidayat', 'process', null, 37, now(), now()),
('ORD-00038', 'Putri Anggraini', 'cancel', null, 38, now(), now()),
('ORD-00039', 'Joko Susilo', 'settled', null, 39, now(), now()),
('ORD-00040', 'Fitri Handayani', 'process', null, 40, now(), now()),
('ORD-00041', 'Eko Saputra', 'cancel', null, 41, now(), now()),
('ORD-00042', 'Lina Marlina', 'settled', null, 42, now(), now()),
('ORD-00043', 'Hari Setiawan', 'process', null, 43, now(), now()),
('ORD-00044', 'Maya Sari', 'cancel', null, 44, now(), now()),
('ORD-00045', 'Fajar Nugroho', 'settled', null, 45, now(), now()),
('ORD-00046', 'Wulan Pertiwi', 'process', null, 46, now(), now()),
('ORD-00047', 'Rizki Kurniawan', 'cancel', null, 47, now(), now()),
('ORD-00048', 'Mega Safitri', 'settled', null, 48, now(), now()),
('ORD-00049', 'Anton Subekti', 'process', null, 49, now(), now()),
('ORD-00050', 'Desi Ratnasari', 'cancel', null, 50, now(), now()),
('ORD-00051', 'Syahrul Anwar', 'settled', null, 51, now(), now()),
('ORD-00052', 'Yuni Astuti', 'process', null, 52, now(), now()),
('ORD-00053', 'Hendra Gunawan', 'cancel', null, 53, now(), now()),
('ORD-00054', 'Indah Wulandari', 'settled', null, 54, now(), now()),
('ORD-00055', 'Ahmad Fauzi', 'process', null, 55, now(), now()),
('ORD-00056', 'Kartika Dewi', 'cancel', null, 56, now(), now()),
('ORD-00057', 'Bayu Saputra', 'settled', null, 57, now(), now()),
('ORD-00058', 'Nia Kusuma', 'process', null, 58, now(), now()),
('ORD-00059', 'Dian Permata', 'cancel', null, 59, now(), now()),
('ORD-00060', 'Arif Budiman', 'settled', null, 60, now(), now());


insert into public.orders_menus (order_id, menu_id, status, quantity, notes) values
-- 1–3 (Kopi)
(1, 1, 'pending', 2, 'extra foam, panas'),
(2, 2, 'served', 1, 'dingin, less sugar'),
(3, 3, 'pending', 1, 'double shot, tanpa gula'),

-- 4–5 (Makanan)
(4, 4, 'served', 1, 'level pedas 2, tambah telur'),
(5, 5, 'pending', 2, 'tanpa bawang goreng'),

-- 6–7 (Dessert)
(6, 6, 'served', 1, 'extra stroberi'),
(7, 7, 'pending', 1, 'extra cokelat topping'),

-- 8–10 (Minuman non-kopi)
(8, 8, 'served', 2, 'manis sedang, dingin'),
(9, 9, 'pending', 1, 'tanpa es, hangat'),
(10, 10, 'served', 1, 'dingin, less sugar'),

-- 11–13 (Kopi lagi)
(11, 1, 'pending', 1, 'tanpa gula, panas'),
(12, 2, 'served', 1, 'dingin, pakai oat milk'),
(13, 3, 'served', 2, 'americano dingin, no sugar'),

-- 14–15 (Makanan)
(14, 4, 'pending', 1, 'level pedas 1, tambah sosis'),
(15, 5, 'served', 1, 'tanpa kerupuk'),

-- 16–17 (Dessert)
(16, 6, 'pending', 1, 'extra keju'),
(17, 7, 'served', 2, 'brownies lebih moist'),

-- 18–20 (Minuman non-kopi)
(18, 8, 'pending', 1, 'hangat, manis sedang'),
(19, 9, 'served', 2, 'dingin, tanpa gula'),
(20, 10, 'pending', 1, 'pakai fresh milk, dingin'),

-- 21–23 (Kopi)
(21, 1, 'served', 2, 'extra shot espresso'),
(22, 2, 'pending', 1, 'latte panas, tanpa gula'),
(23, 3, 'served', 1, 'americano panas'),

-- 24–25 (Makanan)
(24, 4, 'pending', 2, 'tambah telur mata sapi'),
(25, 5, 'served', 1, 'pedas sedang, tanpa bawang'),

-- 26–27 (Dessert)
(26, 6, 'served', 1, 'cheesecake dengan blueberry'),
(27, 7, 'pending', 1, 'brownies extra cokelat chip'),

-- 28–30 (Minuman non-kopi)
(28, 8, 'served', 2, 'dingin, gula sedikit'),
(29, 9, 'pending', 1, 'hangat, tanpa es'),
(30, 10, 'served', 1, 'less sugar, dingin');
