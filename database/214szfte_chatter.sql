-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2022 at 04:11 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `214szfte_chatter`
--

-- --------------------------------------------------------

--
-- Table structure for table `chat-room-backend`
--

CREATE TABLE `chat-room-backend` (
  `id` int(11) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `chat-room-desktop`
--

CREATE TABLE `chat-room-desktop` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `chat-room-mobile`
--

CREATE TABLE `chat-room-mobile` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `chat-room-web`
--

CREATE TABLE `chat-room-web` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `chat_room_frontend`
--

CREATE TABLE `chat_room_frontend` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chat_room_frontend`
--

INSERT INTO `chat_room_frontend` (`id`, `username`, `text`, `date`) VALUES
(1, 'dani', 'dsfsdfsdf', '2022-01-15'),
(2, 'jani', 'yeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', '2022-01-15'),
(3, 'dani', 'fsdfsdf', '2022-01-16');

-- --------------------------------------------------------

--
-- Table structure for table `chat_room_main`
--

CREATE TABLE `chat_room_main` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chat_room_main`
--

INSERT INTO `chat_room_main` (`id`, `username`, `text`, `date`) VALUES
(1, 'jenő', 'lorem ipsum dolonor', '0000-00-00'),
(2, 'jenő', 'lorem ipsum dolonor', '0000-00-00'),
(3, 'jenő', 'lorem ipsum dolonor', '2022-01-15'),
(4, 'dani', 'gdfgsfgdfs', '2022-01-15'),
(5, 'dani', 'ASSASDsafdasgfdagadfklgméladfkghméladfsgbhméálgkbam', '2022-01-15'),
(6, 'dani', 'hogy a tetves kurva anyád !!!!!!!!!!! bebugosodsz a userektől teeeeeeeeeeeeeeee', '2022-01-15'),
(7, 'jani', 'óóóóóó hogy rohadjál le te tetvedék mert bebugosodsz a user kezeléstől !!!!!!!!', '2022-01-15'),
(8, 'dani', 'menjél el sörözni', '2022-01-15'),
(9, 'jani', 'az lesz én skizó másik felem ... elegem van ', '2022-01-15'),
(10, 'jani', 'aaa', '2022-01-16'),
(11, 'jani', 'fgasdfds', '2022-01-16'),
(12, 'dani', 'aaaaa', '2022-01-16'),
(13, 'dani', 'gfdgfdg', '2022-01-16'),
(14, 'dani', 'dfsfsdf', '2022-01-16'),
(15, 'dani', 'fsdfsd', '2022-01-16'),
(16, 'jani', 'dfdsfdsf', '2022-01-16'),
(17, 'dani', 'fdDSFD', '2022-01-16'),
(18, 'jani', 'fsdfdsfsdf', '2022-01-16'),
(19, 'dani', 'gdfgdfg', '2022-01-16'),
(20, 'dani', 'sdsad', '2022-01-17'),
(21, 'dani', 'dfasd', '2022-01-17'),
(22, 'dani', 'asd', '2022-01-17'),
(23, 'dani', 'asd', '2022-01-17'),
(24, 'dani', 'asd', '2022-01-17'),
(25, 'dani', 'asd', '2022-01-17'),
(26, 'dani', 'asd', '2022-01-17'),
(27, 'dani', 'asd', '2022-01-17'),
(28, 'dani', 'asd', '2022-01-17'),
(29, 'dani', 'asd', '2022-01-17'),
(30, 'dani', 'asd', '2022-01-17'),
(31, 'dani', 'das', '2022-01-17'),
(32, 'dani', 'das', '2022-01-17'),
(33, 'dani', 'sdadsa', '2022-01-17'),
(34, 'dani', 'sd', '2022-01-17'),
(35, 'dani', 'ad', '2022-01-17'),
(36, 'dani', 'asd', '2022-01-17'),
(37, 'dani', 'asd', '2022-01-17'),
(38, 'dani', 'asd', '2022-01-17'),
(39, 'dani', 'asd', '2022-01-17'),
(40, 'dani', 'asd', '2022-01-17'),
(41, 'dani', 'asd', '2022-01-17'),
(42, 'dani', 'asd', '2022-01-17'),
(43, 'dani', 's', '2022-01-17'),
(44, 'dani', 'fdsfdsf', '2022-01-17'),
(45, 'dani', 'dsfsdf', '2022-01-17'),
(46, 'dani', 'dfsf', '2022-01-17'),
(47, 'dani', 'sdf', '2022-01-17'),
(48, 'dani', 'fsd', '2022-01-17'),
(49, 'dani', 'fsd', '2022-01-17'),
(50, 'dani', 'fsdfsd', '2022-01-17'),
(51, 'dani', 'f', '2022-01-17'),
(52, 'dani', 'sdf', '2022-01-17'),
(53, 'dani', 'fdsdf', '2022-01-17'),
(54, 'dani', 'dsfds', '2022-01-17'),
(55, 'dani', 'fsdf', '2022-01-17'),
(56, 'dani', 'sdf', '2022-01-17'),
(57, 'dani', 'sdf', '2022-01-17'),
(58, 'dani', 'sdf', '2022-01-17'),
(59, 'dani', 'sdf', '2022-01-17'),
(60, 'dani', 'sdf', '2022-01-17'),
(61, 'dani', 'sdf', '2022-01-17'),
(62, 'dani', '3254356', '2022-01-17'),
(63, 'dani', '42365', '2022-01-17'),
(64, 'dani', '256', '2022-01-17'),
(65, 'dani', '45267', '2022-01-17'),
(66, 'dani', '5246', '2022-01-17'),
(67, 'dani', '2', '2022-01-17'),
(68, 'dani', '62453', '2022-01-17'),
(69, 'dani', '6', '2022-01-17'),
(70, 'dani', '2546', '2022-01-17'),
(71, 'dani', '5246', '2022-01-17'),
(72, 'dani', 'fdsfds', '2022-01-17'),
(73, 'dani', 'fds', '2022-01-17'),
(74, 'dani', 'fsdf', '2022-01-17'),
(75, 'dani', 'sdf', '2022-01-17'),
(76, 'dani', 'sdf', '2022-01-17'),
(77, 'dani', 'sdf', '2022-01-17'),
(78, 'dani', 'sdf', '2022-01-17'),
(79, 'dani', 'dfs', '2022-01-17'),
(80, 'dani', 'fsd', '2022-01-17'),
(81, 'dani', 'fsd', '2022-01-17'),
(82, 'dani', 'fsd', '2022-01-17'),
(83, 'dani', 'fsd', '2022-01-17'),
(84, 'dani', 'f', '2022-01-17'),
(85, 'dani', 'dasd', '2022-01-17'),
(86, 'dani', 'sadsa', '2022-01-17'),
(87, 'dani', 'd', '2022-01-17'),
(88, 'dani', 'asd', '2022-01-17'),
(89, 'dani', 'asd', '2022-01-17'),
(90, 'dani', 'sa', '2022-01-17'),
(91, 'dani', 'ds', '2022-01-17'),
(92, 'dani', 'ad', '2022-01-17'),
(93, 'dani', 'asd', '2022-01-17'),
(94, 'dani', 'asd', '2022-01-17'),
(95, 'dani', 'as', '2022-01-17'),
(96, 'dani', 'fdsfds', '2022-01-17'),
(97, 'dani', 'gdfghdsafghagf', '2022-01-17'),
(98, 'dani', 'dsfsdfsd', '2022-01-17');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`) VALUES
(1, 'dani', 'dani'),
(2, 'jani', 'jani'),
(3, 'zebra', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat-room-desktop`
--
ALTER TABLE `chat-room-desktop`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chat-room-mobile`
--
ALTER TABLE `chat-room-mobile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chat-room-web`
--
ALTER TABLE `chat-room-web`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chat_room_frontend`
--
ALTER TABLE `chat_room_frontend`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chat_room_main`
--
ALTER TABLE `chat_room_main`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat-room-desktop`
--
ALTER TABLE `chat-room-desktop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `chat-room-mobile`
--
ALTER TABLE `chat-room-mobile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `chat-room-web`
--
ALTER TABLE `chat-room-web`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `chat_room_frontend`
--
ALTER TABLE `chat_room_frontend`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `chat_room_main`
--
ALTER TABLE `chat_room_main`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
