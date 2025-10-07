insert into public.orders (order_id, customer_name, status, payment_token, table_id, created_at, updated_at) values
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
-- Order 1
(1, 4, 'pending', 1, 'spicy level 2, add egg'),
(1, 1, 'pending', 1, 'extra foam, hot'),

-- Order 2
(2, 5, 'served', 1, 'no fried onion'),
(2, 2, 'served', 1, 'iced, less sugar'),

-- Order 3
(3, 4, 'pending', 2, 'mild spicy, extra sausage'),
(3, 3, 'pending', 1, 'double shot, no sugar'),

-- Order 4
(4, 5, 'served', 1, 'extra chili'),
(4, 8, 'served', 1, 'sweet, cold'),

-- Order 5
(5, 4, 'pending', 1, 'add sunny side egg'),
(5, 9, 'pending', 1, 'no ice, warm'),

-- Order 6
(6, 5, 'served', 1, 'no chili, add crackers'),
(6, 10, 'served', 1, 'iced, less sugar'),

-- Order 7
(7, 4, 'pending', 1, 'extra vegetables'),
(7, 1, 'pending', 1, 'extra hot'),

-- Order 8
(8, 5, 'served', 2, 'spicy level 3'),
(8, 2, 'served', 1, 'latte with oat milk'),

-- Order 9
(9, 4, 'pending', 1, 'less oil, add egg'),
(9, 3, 'pending', 1, 'americano, iced'),

-- Order 10
(10, 5, 'served', 1, 'add chicken'),
(10, 8, 'served', 1, 'cold, less sugar'),

-- Order 11
(11, 4, 'pending', 1, 'extra portion'),
(11, 9, 'pending', 1, 'warm, no ice'),

-- Order 12
(12, 5, 'served', 1, 'no garlic'),
(12, 10, 'served', 1, 'creamy, iced'),

-- Order 13
(13, 4, 'pending', 1, 'spicy level 1'),
(13, 1, 'pending', 1, 'add caramel'),

-- Order 14
(14, 5, 'served', 2, 'extra sambal'),
(14, 2, 'served', 1, 'latte hot'),

-- Order 15
(15, 4, 'pending', 1, 'less salt'),
(15, 3, 'pending', 1, 'americano hot'),

-- Order 16
(16, 5, 'served', 1, 'extra spicy'),
(16, 8, 'served', 1, 'sweet, with ice'),

-- Order 17
(17, 4, 'pending', 1, 'add meatball'),
(17, 9, 'pending', 1, 'fresh juice, no sugar'),

-- Order 18
(18, 5, 'served', 1, 'no chili, extra egg'),
(18, 10, 'served', 1, 'matcha iced, less sugar'),

-- Order 19
(19, 4, 'pending', 1, 'spicy medium'),
(19, 1, 'pending', 1, 'double espresso, hot'),

-- Order 20
(20, 5, 'served', 1, 'extra soy sauce'),
(20, 2, 'served', 1, 'latte iced, less sugar'),

-- Order 21
(21, 4, 'pending', 2, 'spicy, with chicken'),
(21, 3, 'pending', 1, 'americano iced'),

-- Order 22
(22, 5, 'served', 1, 'mild spicy'),
(22, 8, 'served', 1, 'sweet iced tea'),

-- Order 23
(23, 4, 'pending', 1, 'extra onion'),
(23, 9, 'pending', 1, 'fresh orange juice'),

-- Order 24
(24, 5, 'served', 1, 'no egg, more vegetables'),
(24, 10, 'served', 1, 'matcha hot'),

-- Order 25
(25, 4, 'pending', 1, 'add shrimp'),
(25, 1, 'pending', 1, 'cappuccino hot'),

-- Order 26
(26, 5, 'served', 1, 'spicy, add meat'),
(26, 2, 'served', 1, 'latte iced'),

-- Order 27
(27, 4, 'pending', 1, 'spicy level 2'),
(27, 3, 'pending', 1, 'americano hot, no sugar'),

-- Order 28
(28, 5, 'served', 2, 'no chili'),
(28, 8, 'served', 1, 'iced, less sweet'),

-- Order 29
(29, 4, 'pending', 1, 'extra sambal'),
(29, 9, 'pending', 1, 'no sugar, iced'),

-- Order 30
(30, 5, 'served', 1, 'mild spicy, add crackers'),
(30, 10, 'served', 1, 'matcha latte iced');
