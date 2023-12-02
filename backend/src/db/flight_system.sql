-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 28, 2023 at 02:32 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flight_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `arrivals`
--

CREATE TABLE `arrivals` (
  `id` int NOT NULL,
  `airline_code` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `flight` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `flight_from` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `estimate_arrive_time` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `cur_date` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `arrivals`
--

INSERT INTO `arrivals` (`id`, `airline_code`, `flight`, `flight_from`, `status`, `estimate_arrive_time`, `cur_date`) VALUES
(1458, 'KSZ', 'KSZ13', 'Cap-Haitien', 'Scheduled', '9:35 AM', '28-11-2023'),
(1459, NULL, 'N200MF', 'Great Exuma Island', 'En Route', '10:48 AM', '28-11-2023'),
(1460, 'KSZ', 'KSZ15', 'Cap-Haitien', 'Scheduled', '11:50 AM', '28-11-2023'),
(1461, 'AAL', 'AAL819', 'Miami', 'Scheduled', '12:59 PM', '28-11-2023'),
(1462, 'JBU', 'JBU1709', 'Fort Lauderdale', 'Scheduled', '1:25 PM', '28-11-2023'),
(1463, 'NKS', 'NKS951', 'Fort Lauderdale', 'Scheduled', '1:28 PM', '28-11-2023'),
(1464, 'KSZ', 'KSZ6250', 'Santiago', 'Scheduled', '2:20 PM', '28-11-2023'),
(1465, 'KSZ', 'KSZ301', 'Santiago', 'Scheduled', '2:20 PM', '28-11-2023'),
(1466, 'KSZ', 'KSZ17', 'Cap-Haitien', 'Scheduled', '4:20 PM', '28-11-2023');

-- --------------------------------------------------------

--
-- Table structure for table `departures`
--

CREATE TABLE `departures` (
  `id` int NOT NULL,
  `airline_code` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `flight` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `flight_to` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `estimate_departure_time` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `cur_date` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `departures`
--

INSERT INTO `departures` (`id`, `airline_code`, `flight`, `flight_to`, `status`, `estimate_departure_time`, `cur_date`) VALUES
(1321, 'KSZ', 'KSZ12', 'Cap-Haitien', 'Scheduled', '8:35 AM', '28-11-2023'),
(1322, 'KSZ', 'KSZ14', 'Cap-Haitien', 'Scheduled', '10:50 AM', '28-11-2023'),
(1323, 'KSZ', 'KSZ6251', 'Santiago', 'Scheduled', '11:50 AM', '28-11-2023'),
(1324, 'KSZ', 'KSZ300', 'Santiago', 'Scheduled', '11:50 AM', '28-11-2023'),
(1325, 'AAL', 'AAL819', 'Miami', 'Scheduled', '3:59 PM', '28-11-2023'),
(1326, 'JBU', 'JBU1710', 'Fort Lauderdale', 'Scheduled', '4:34 PM', '28-11-2023'),
(1327, 'NKS', 'NKS952', 'Fort Lauderdale', 'Scheduled', '4:16 PM', '28-11-2023'),
(1328, 'KSZ', 'KSZ16', 'Cap-Haitien', 'Scheduled', '3:20 PM', '28-11-2023');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `arrivals`
--
ALTER TABLE `arrivals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `departures`
--
ALTER TABLE `departures`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `arrivals`
--
ALTER TABLE `arrivals`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1467;

--
-- AUTO_INCREMENT for table `departures`
--
ALTER TABLE `departures`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1329;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
