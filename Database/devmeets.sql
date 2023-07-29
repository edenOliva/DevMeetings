-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2023 at 08:13 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `devmeets`
--
CREATE DATABASE IF NOT EXISTS `devmeets` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `devmeets`;

-- --------------------------------------------------------

--
-- Table structure for table `devgroups`
--

CREATE TABLE `devgroups` (
  `groupId` int(11) NOT NULL,
  `groupName` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `devgroups`
--

INSERT INTO `devgroups` (`groupId`, `groupName`) VALUES
(1, 'UI Team'),
(2, 'Mobile Team');

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `meetingId` int(11) NOT NULL,
  `groupId` int(11) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `description` varchar(75) NOT NULL,
  `meetingRoom` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`meetingId`, `groupId`, `start`, `end`, `description`, `meetingRoom`) VALUES
(1, 1, '2023-03-27 18:30:00', '2023-03-27 19:30:00', 'Choosing colors for the main screen and banners', 'Blue Room'),
(2, 2, '2023-03-28 11:00:00', '2023-03-28 12:30:00', 'Weekly user interaction meeting', 'Boardroom'),
(3, 1, '2023-03-27 15:45:00', '2023-03-27 16:30:00', 'Choosing colors for valentine\'s day sales', 'Blue Room'),
(5, 1, '2023-03-30 10:30:00', '2023-03-30 12:05:00', 'Fixing bugs ', 'New-York room'),
(6, 2, '2023-04-02 15:35:00', '2023-04-02 16:10:00', 'Fun meeting - bring snacks', 'Pink room ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `devgroups`
--
ALTER TABLE `devgroups`
  ADD PRIMARY KEY (`groupId`);

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`meetingId`),
  ADD KEY `groupId` (`groupId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `devgroups`
--
ALTER TABLE `devgroups`
  MODIFY `groupId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `meetings`
--
ALTER TABLE `meetings`
  MODIFY `meetingId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`groupId`) REFERENCES `devgroups` (`groupId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
