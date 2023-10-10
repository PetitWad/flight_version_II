-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 10, 2023 at 04:17 PM
-- Server version: 8.0.31
-- PHP Version: 8.1.13

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

DROP TABLE IF EXISTS `arrivals`;
CREATE TABLE IF NOT EXISTS `arrivals` (
  `id` int NOT NULL AUTO_INCREMENT,
  `airline_code` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `flight` int NOT NULL,
  `flight_from` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `estimate_arrive_time` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `cur_date` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=142 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `arrivals`
--

INSERT INTO `arrivals` (`id`, `airline_code`, `flight`, `flight_from`, `status`, `estimate_arrive_time`, `cur_date`) VALUES
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
(11, 'KSZ', 305, 'Havana', 'Scheduled', '07:49PM', '02-Oct-2023'),
(12, 'NKS', 951, 'Fort Lauderdale, FL', 'En Route / On Time', '01:15PM', '02-Oct-2023'),
(13, 'AJT', 8111, 'Miami, FL', 'En Route / Delayed', '01:28PM', '02-Oct-2023'),
(14, 'KSZ', 221, 'Pointe-a-Pitre', 'En Route / On Time', '01:30PM', '02-Oct-2023'),
(15, 'FWI', 559, 'Orly (near Paris)', 'En Route / On Time', '01:49PM', '02-Oct-2023'),
(16, 'JBU', 1509, 'Fort Lauderdale, FL', 'Scheduled / Delayed', '04:24PM', '02-Oct-2023'),
(17, 'KSZ', 305, 'Havana', 'Scheduled / Delayed', '05:20PM', '02-Oct-2023'),
(18, 'KSZ', 305, 'Havana', 'Scheduled', '07:49PM', '02-Oct-2023'),
(19, 'AAL', 819, 'Miami, FL', 'En Route / On Time', '11:36AM', '03-Oct-2023'),
(20, 'CEY', 131, 'Santo Domingo', 'Scheduled', '08:20AM', '03-Oct-2023'),
(21, 'KSZ', 301, 'Santiago', 'Scheduled', '10:50AM', '03-Oct-2023'),
(22, 'JBU', 935, 'New York, NY', 'En Route / On Time', '12:15PM', '03-Oct-2023'),
(23, 'WIA', 809, 'St Maarten', 'Scheduled', '12:20PM', '03-Oct-2023'),
(24, 'NKS', 951, 'Fort Lauderdale, FL', 'Scheduled', '01:07PM', '03-Oct-2023'),
(25, 'JBU', 1509, 'Fort Lauderdale, FL', 'Scheduled', '02:44PM', '03-Oct-2023'),
(26, 'AAL', 819, 'Miami, FL', 'En Route / On Time', '11:36AM', '03-Oct-2023'),
(27, 'CEY', 131, 'Santo Domingo', 'Scheduled', '08:20AM', '03-Oct-2023'),
(28, 'KSZ', 301, 'Santiago', 'Scheduled', '10:50AM', '03-Oct-2023'),
(29, 'JBU', 935, 'New York, NY', 'En Route / On Time', '12:15PM', '03-Oct-2023'),
(30, 'WIA', 809, 'St Maarten', 'Scheduled', '12:20PM', '03-Oct-2023'),
(31, 'NKS', 951, 'Fort Lauderdale, FL', 'Scheduled', '01:07PM', '03-Oct-2023'),
(32, 'JBU', 1509, 'Fort Lauderdale, FL', 'Scheduled', '02:44PM', '03-Oct-2023'),
(33, 'AAL', 819, 'Miami, FL', 'En Route / On Time', '11:36AM', '03-Oct-2023'),
(34, 'CEY', 131, 'Santo Domingo', 'Scheduled', '08:20AM', '03-Oct-2023'),
(35, 'KSZ', 301, 'Santiago', 'Scheduled', '10:50AM', '03-Oct-2023'),
(36, 'JBU', 935, 'New York, NY', 'En Route / On Time', '12:15PM', '03-Oct-2023'),
(37, 'WIA', 809, 'St Maarten', 'Scheduled', '12:20PM', '03-Oct-2023'),
(38, 'NKS', 951, 'Fort Lauderdale, FL', 'En Route / On Time', '01:07PM', '03-Oct-2023'),
(39, 'JBU', 1509, 'Fort Lauderdale, FL', 'Scheduled', '02:44PM', '03-Oct-2023'),
(40, 'AAL', 819, 'Miami, FL', 'En Route / On Time', '11:36AM', '03-Oct-2023'),
(41, 'CEY', 131, 'Santo Domingo', 'Scheduled', '08:20AM', '03-Oct-2023'),
(42, 'JBU', 935, 'New York, NY', 'En Route / On Time', '12:15PM', '03-Oct-2023'),
(43, 'KSZ', 301, 'Santiago', 'Scheduled', '10:50AM', '03-Oct-2023'),
(44, 'WIA', 809, 'St Maarten', 'Scheduled', '12:20PM', '03-Oct-2023'),
(45, 'NKS', 951, 'Fort Lauderdale, FL', 'En Route / On Time', '01:04PM', '03-Oct-2023'),
(46, 'JBU', 1509, 'Fort Lauderdale, FL', 'Scheduled', '02:44PM', '03-Oct-2023'),
(47, 'JBU', 935, 'New York, NY', 'En Route / On Time', '12:15PM', '03-Oct-2023'),
(48, 'WIA', 809, 'St Maarten', 'Scheduled', '12:20PM', '03-Oct-2023'),
(49, 'CEY', 131, 'Santo Domingo', 'Scheduled', '08:20AM', '03-Oct-2023'),
(50, 'KSZ', 301, 'Santiago', 'Scheduled', '10:50AM', '03-Oct-2023'),
(51, 'NKS', 951, 'Fort Lauderdale, FL', 'En Route / On Time', '12:59PM', '03-Oct-2023'),
(52, 'JBU', 1509, 'Fort Lauderdale, FL', 'Scheduled', '02:44PM', '03-Oct-2023'),
(53, 'KSZ', 237, 'Managua, Managua', 'Scheduled', '05:13PM', '03-Oct-2023'),
(54, 'KSZ', 301, 'Santiago', 'Scheduled', '10:50AM', '03-Oct-2023'),
(55, 'JBU', 1509, 'Fort Lauderdale, FL', 'En Route / On Time', '02:42PM', '03-Oct-2023'),
(56, 'SHH', 1404, 'Managua, Managua', 'En Route / On Time', '03:14PM', '03-Oct-2023'),
(57, 'KSZ', 5237, 'Managua, Managua', 'En Route / On Time', '03:20PM', '03-Oct-2023'),
(58, 'WIA', 809, 'St Maarten', 'Scheduled', '12:20PM', '03-Oct-2023'),
(59, 'KSZ', 237, 'Managua, Managua', 'Scheduled', '05:13PM', '03-Oct-2023'),
(60, 'JBU', 1509, 'Fort Lauderdale, FL', 'En Route / On Time', '02:42PM', '03-Oct-2023'),
(61, 'SHH', 1404, 'Managua, Managua', 'En Route / On Time', '03:14PM', '03-Oct-2023'),
(62, 'KSZ', 5237, 'Managua, Managua', 'En Route / On Time', '03:20PM', '03-Oct-2023'),
(63, 'KSZ', 237, 'Managua, Managua', 'Scheduled', '05:13PM', '03-Oct-2023'),
(64, 'KSZ', 2237, 'Managua, Managua', 'En Route / On Time', '05:08PM', '03-Oct-2023'),
(65, 'KSZ', 237, 'Managua, Managua', 'En Route / On Time', '05:19PM', '03-Oct-2023'),
(66, 'KSZ', 2237, 'Managua, Managua', 'En Route / On Time', '05:08PM', '03-Oct-2023'),
(67, 'KSZ', 237, 'Managua, Managua', 'En Route / On Time', '05:19PM', '03-Oct-2023'),
(68, 'CEY', 131, 'Santo Domingo', 'Scheduled', '08:20AM', '05-Oct-2023'),
(69, 'KSZ', 15, 'Cap-Haitien', 'Scheduled', '11:55AM', '05-Oct-2023'),
(70, 'GAL', 9020, 'Managua, Managua', 'Scheduled', '12:40PM', '05-Oct-2023'),
(71, 'JBU', 935, 'New York, NY', 'En Route / Delayed', '12:58PM', '05-Oct-2023'),
(72, 'NKS', 951, 'Fort Lauderdale, FL', 'Scheduled', '01:22PM', '05-Oct-2023'),
(73, 'AAL', 819, 'Miami, FL', 'Scheduled', '01:27PM', '05-Oct-2023'),
(74, 'JBU', 1509, 'Fort Lauderdale, FL', 'Scheduled / Delayed', '03:51PM', '05-Oct-2023'),
(75, 'EDR', 732, 'Managua, Managua', 'En Route / On Time', '02:00PM', '05-Oct-2023'),
(76, 'KSZ', 15, 'Cap-Haitien', 'Scheduled', '11:55AM', '05-Oct-2023'),
(77, 'SHH', 1404, 'Managua, Managua', 'Scheduled', '03:31PM', '05-Oct-2023'),
(78, 'JBU', 1509, 'Fort Lauderdale, FL', 'Scheduled / Delayed', '03:34PM', '05-Oct-2023'),
(79, 'KSZ', 237, 'Managua, Managua', 'Scheduled', '05:52PM', '05-Oct-2023'),
(80, 'GXA', 509, 'Miami, FL', 'En Route / On Time', '09:58AM', '09-Oct-2023'),
(81, 'SHH', 1404, 'Managua, Managua', 'Delayed', '09:59AM', '09-Oct-2023'),
(82, 'AJT', 8111, 'Miami, FL', 'Scheduled', '07:42AM', '09-Oct-2023'),
(83, 'AAL', 819, 'Miami, FL', 'Scheduled', '12:00PM', '09-Oct-2023'),
(84, 'NKS', 951, 'Fort Lauderdale, FL', 'Scheduled', '01:17PM', '09-Oct-2023'),
(85, 'FWI', 559, 'Orly (near Paris)', 'En Route / On Time', '01:21PM', '09-Oct-2023'),
(86, 'KSZ', 221, 'Pointe-a-Pitre', 'Scheduled', '01:41PM', '09-Oct-2023'),
(87, 'JBU', 1509, 'Fort Lauderdale, FL', 'Scheduled', '02:31PM', '09-Oct-2023'),
(88, 'KSZ', 305, 'Havana', 'Scheduled', '03:50PM', '09-Oct-2023'),
(89, 'AAL', 819, 'Miami, FL', 'En Route / On Time', '11:57AM', '09-Oct-2023'),
(90, 'NKS', 951, 'Fort Lauderdale, FL', 'En Route / On Time', '12:58PM', '09-Oct-2023'),
(91, 'CEY', 584, 'Managua, Managua', 'En Route / On Time', '01:07PM', '09-Oct-2023'),
(92, 'FWI', 559, 'Orly (near Paris)', 'En Route / On Time', '01:21PM', '09-Oct-2023'),
(93, 'AJT', 8111, 'Miami, FL', 'Delayed', '01:23PM', '09-Oct-2023'),
(94, 'KSZ', 221, 'Pointe-a-Pitre', 'En Route / On Time', '01:30PM', '09-Oct-2023'),
(95, 'SHH', 1404, 'Managua, Managua', 'Delayed', '09:59AM', '09-Oct-2023'),
(96, 'JBU', 1509, 'Fort Lauderdale, FL', 'Scheduled', '02:41PM', '09-Oct-2023'),
(97, 'SHH', 1404, 'Managua, Managua', 'Scheduled', '03:00PM', '09-Oct-2023'),
(98, 'KSZ', 305, 'Havana', 'Scheduled', '03:50PM', '09-Oct-2023'),
(99, 'AAL', 819, 'Miami, FL', 'En Route / On Time', '12:12PM', '09-Oct-2023'),
(100, 'NKS', 951, 'Fort Lauderdale, FL', 'En Route / On Time', '12:58PM', '09-Oct-2023'),
(101, 'CEY', 584, 'Managua, Managua', 'En Route / On Time', '01:07PM', '09-Oct-2023'),
(102, 'FWI', 559, 'Orly (near Paris)', 'En Route / On Time', '01:21PM', '09-Oct-2023'),
(103, 'KSZ', 221, 'Pointe-a-Pitre', 'En Route / On Time', '01:30PM', '09-Oct-2023'),
(104, 'AJT', 8111, 'Miami, FL', 'En Route / Delayed', '01:33PM', '09-Oct-2023'),
(105, 'SHH', 1404, 'Managua, Managua', 'En Route / On Time', '02:06PM', '09-Oct-2023'),
(106, 'JBU', 1509, 'Fort Lauderdale, FL', 'Scheduled', '02:41PM', '09-Oct-2023'),
(107, 'KSZ', 305, 'Havana', 'Scheduled', '03:50PM', '09-Oct-2023'),
(108, 'NKS', 951, 'Fort Lauderdale, FL', 'En Route / On Time', '12:58PM', '09-Oct-2023'),
(109, 'CEY', 584, 'Managua, Managua', 'En Route / On Time', '01:07PM', '09-Oct-2023'),
(110, 'FWI', 559, 'Orly (near Paris)', 'En Route / On Time', '01:21PM', '09-Oct-2023'),
(111, 'KSZ', 221, 'Pointe-a-Pitre', 'En Route / On Time', '01:30PM', '09-Oct-2023'),
(112, 'AJT', 8111, 'Miami, FL', 'En Route / Delayed', '01:33PM', '09-Oct-2023'),
(113, 'SHH', 1404, 'Managua, Managua', 'En Route / On Time', '02:06PM', '09-Oct-2023'),
(114, 'JBU', 1509, 'Fort Lauderdale, FL', 'Scheduled', '02:41PM', '09-Oct-2023'),
(115, 'KSZ', 305, 'Havana', 'Scheduled', '03:50PM', '09-Oct-2023'),
(116, 'NKS', 951, 'Fort Lauderdale, FL', 'En Route / On Time', '12:58PM', '09-Oct-2023'),
(117, 'CEY', 584, 'Managua, Managua', 'En Route / On Time', '01:07PM', '09-Oct-2023'),
(118, 'FWI', 559, 'Orly (near Paris)', 'En Route / On Time', '01:21PM', '09-Oct-2023'),
(119, 'KSZ', 221, 'Pointe-a-Pitre', 'En Route / On Time', '01:30PM', '09-Oct-2023'),
(120, 'AJT', 8111, 'Miami, FL', 'En Route / Delayed', '01:33PM', '09-Oct-2023'),
(121, 'SHH', 1404, 'Managua, Managua', 'En Route / On Time', '02:06PM', '09-Oct-2023'),
(122, 'JBU', 1509, 'Fort Lauderdale, FL', 'Scheduled', '02:41PM', '09-Oct-2023'),
(123, 'KSZ', 305, 'Havana', 'Scheduled', '03:50PM', '09-Oct-2023'),
(124, 'KSZ', 301, 'Santiago', 'Scheduled', '10:50AM', '10-Oct-2023'),
(125, 'KSZ', 237, 'Managua, Managua', 'Scheduled', '10:52AM', '10-Oct-2023'),
(126, 'AAL', 819, 'Miami, FL', 'Taxiing / Left Gate', '12:00PM', '10-Oct-2023'),
(127, 'WIA', 809, 'St Maarten', 'Scheduled', '12:09PM', '10-Oct-2023'),
(128, 'JBU', 935, 'New York, NY', 'En Route / On Time', '12:14PM', '10-Oct-2023'),
(129, 'NKS', 951, 'Fort Lauderdale, FL', 'Scheduled', '01:18PM', '10-Oct-2023'),
(130, 'GMT', 3500, 'Monterrey, Nuevo Leon', 'Scheduled', '02:44PM', '10-Oct-2023'),
(131, 'JBU', 1509, 'Fort Lauderdale, FL', 'Scheduled', '02:45PM', '10-Oct-2023'),
(132, 'GMT', 4351, 'Managua, Managua', 'Scheduled', '09:25PM', '10-Oct-2023'),
(133, 'KSZ', 301, 'Santiago', 'Scheduled', '10:50AM', '10-Oct-2023'),
(134, 'KSZ', 237, 'Managua, Managua', 'Scheduled', '10:52AM', '10-Oct-2023'),
(135, 'AAL', 819, 'Miami, FL', 'Taxiing / Left Gate', '12:00PM', '10-Oct-2023'),
(136, 'WIA', 809, 'St Maarten', 'Scheduled', '12:09PM', '10-Oct-2023'),
(137, 'JBU', 935, 'New York, NY', 'En Route / On Time', '12:14PM', '10-Oct-2023'),
(138, 'NKS', 951, 'Fort Lauderdale, FL', 'Scheduled', '01:18PM', '10-Oct-2023'),
(139, 'GMT', 3500, 'Monterrey, Nuevo Leon', 'Scheduled', '02:44PM', '10-Oct-2023'),
(140, 'JBU', 1509, 'Fort Lauderdale, FL', 'Scheduled', '02:45PM', '10-Oct-2023'),
(141, 'GMT', 4351, 'Managua, Managua', 'Scheduled', '09:25PM', '10-Oct-2023');

-- --------------------------------------------------------

--
-- Table structure for table `departures`
--

DROP TABLE IF EXISTS `departures`;
CREATE TABLE IF NOT EXISTS `departures` (
  `id` int NOT NULL AUTO_INCREMENT,
  `airline_code` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `flight` int NOT NULL,
  `flight_to` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `estimate_arrive_time` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `cur_date` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `departures`
--

INSERT INTO `departures` (`id`, `airline_code`, `flight`, `flight_to`, `status`, `estimate_arrive_time`, `cur_date`) VALUES
(1, 'KSZ', 236, 'Managua, Managua', 'En Route / On Time', '11:38AM', '09-Oct-2023'),
(2, 'GXA', 508, 'Miami, FL', 'En Route / On Time', '11:23AM', '09-Oct-2023'),
(3, 'JBU', 634, 'New York, NY', 'En Route / On Time', '11:15AM', '09-Oct-2023'),
(4, 'SHH', 1403, 'Managua, Managua', 'Arrived', '09:39AM', '09-Oct-2023'),
(5, 'KSZ', 220, 'Pointe-a-Pitre', 'Arrived / Gate Arrival', '09:12AM', '09-Oct-2023'),
(6, 'KSZ', 5236, 'Managua, Managua', 'En Route / On Time', '09:36AM', '10-Oct-2023'),
(7, 'SHH', 1403, 'Managua, Managua', 'En Route / Delayed', '09:33AM', '10-Oct-2023'),
(8, 'KSZ', 5236, 'Managua, Managua', 'En Route / On Time', '09:36AM', '10-Oct-2023'),
(9, 'SHH', 1403, 'Managua, Managua', 'En Route / Delayed', '09:33AM', '10-Oct-2023');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
