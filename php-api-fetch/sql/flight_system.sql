-- phpMyAdmin SQL Dump
<<<<<<< HEAD:backend/sql/flight_system.sql
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 09, 2023 at 07:11 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10
=======
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 02, 2023 at 02:45 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26
>>>>>>> 151c6973f1daad7767dfaa1465a3625401c7d635:php-api-fetch/sql/flight_system.sql

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

<<<<<<< HEAD:backend/sql/flight_system.sql
CREATE TABLE `arrivals` (
  `id` int NOT NULL,
=======
DROP TABLE IF EXISTS `arrivals`;
CREATE TABLE IF NOT EXISTS `arrivals` (
  `id` int NOT NULL AUTO_INCREMENT,
>>>>>>> 151c6973f1daad7767dfaa1465a3625401c7d635:php-api-fetch/sql/flight_system.sql
  `airline_code` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `flight` int NOT NULL,
  `flight_from` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `estimate_arrive_time` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
<<<<<<< HEAD:backend/sql/flight_system.sql
  `cur_date` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
=======
  `cur_date` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
>>>>>>> 151c6973f1daad7767dfaa1465a3625401c7d635:php-api-fetch/sql/flight_system.sql

--
-- Dumping data for table `arrivals`
--

INSERT INTO `arrivals` (`id`, `airline_code`, `flight`, `flight_from`, `status`, `estimate_arrive_time`, `cur_date`) VALUES
<<<<<<< HEAD:backend/sql/flight_system.sql
(1, 'KSZ', 305, 'Havana', 'En Route / On Time', '03:50PM', '09-Oct-2023'),
(2, 'SHH', 1406, 'Managua, Managua', 'En Route / On Time', '04:01PM', '09-Oct-2023'),
(3, 'KSZ', 237, 'Managua, Managua', 'Scheduled', '05:18PM', '09-Oct-2023');
=======
(1, 'KSZ', 23, 'Jeremie', 'Scheduled', '09:04AM', '02-Oct-2023'),
(2, 'CEY', 131, 'Santo Domingo', 'Scheduled', '08:20AM', '02-Oct-2023'),
(3, 'IWY', 940, 'Providenciales', 'En Route / Delayed', '11:11AM', '02-Oct-2023'),
(4, 'AAL', 819, 'Miami, FL', 'En Route / On Time', '11:56AM', '02-Oct-2023'),
(5, 'NKS', 951, 'Fort Lauderdale, FL', 'Scheduled', '12:57PM', '02-Oct-2023'),
(6, 'AJT', 8111, 'Miami, FL', 'Delayed', '01:13PM', '02-Oct-2023'),
(7, 'FWI', 559, 'Orly (near Paris)', 'En Route / On Time', '01:35PM', '02-Oct-2023'),
(8, 'KSZ', 221, 'Pointe-a-Pitre', 'Scheduled', '01:43PM', '02-Oct-2023'),
(9, 'JBU', 1509, 'Fort Lauderdale, FL', 'Scheduled / Delayed', '04:31PM', '02-Oct-2023'),
(10, 'KSZ', 305, 'Havana', 'Scheduled / Delayed', '05:20PM', '02-Oct-2023'),
(11, 'KSZ', 305, 'Havana', 'Scheduled', '07:49PM', '02-Oct-2023');
>>>>>>> 151c6973f1daad7767dfaa1465a3625401c7d635:php-api-fetch/sql/flight_system.sql

-- --------------------------------------------------------

--
-- Table structure for table `departures`
--

<<<<<<< HEAD:backend/sql/flight_system.sql
CREATE TABLE `departures` (
  `id` int NOT NULL,
  `airline_code` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `flight` int NOT NULL,
  `flight_to` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `estimate_arrive_time` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `cur_date` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `departures`
--

INSERT INTO `departures` (`id`, `airline_code`, `flight`, `flight_to`, `status`, `estimate_arrive_time`, `cur_date`) VALUES
(1, 'KSZ', 236, 'Managua, Managua', 'En Route / On Time', '11:38AM', '09-Oct-2023'),
(2, 'GXA', 508, 'Miami, FL', 'En Route / On Time', '11:23AM', '09-Oct-2023'),
(3, 'JBU', 634, 'New York, NY', 'En Route / On Time', '11:15AM', '09-Oct-2023'),
(4, 'SHH', 1403, 'Managua, Managua', 'Arrived', '09:39AM', '09-Oct-2023'),
(5, 'KSZ', 220, 'Pointe-a-Pitre', 'Arrived / Gate Arrival', '09:12AM', '09-Oct-2023');

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `departures`
--
ALTER TABLE `departures`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
=======
DROP TABLE IF EXISTS `departures`;
CREATE TABLE IF NOT EXISTS `departures` (
  `id` int NOT NULL AUTO_INCREMENT,
  `airline_code` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `flight` int NOT NULL,
  `flight_to` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `time` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `logo` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
>>>>>>> 151c6973f1daad7767dfaa1465a3625401c7d635:php-api-fetch/sql/flight_system.sql
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
