-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 12, 2015 at 03:43 PM
-- Server version: 5.6.16
-- PHP Version: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `tester`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE IF NOT EXISTS `booking` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `seat_no` int(5) NOT NULL,
  `booking_date` date NOT NULL,
  `booked_by` varchar(50) NOT NULL,
  `status` enum('s','bo','bl') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id`, `seat_no`, `booking_date`, `booked_by`, `status`) VALUES
(1, 1, '2015-10-13', 'AAA', 's'),
(2, 2, '2015-10-13', 'GGGG', 'bo'),
(3, 5, '2015-10-13', 'SSS', 's'),
(4, 7, '2015-10-13', 'FFFFF', 'bl');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE IF NOT EXISTS `movies` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `show_times_id` int(10) NOT NULL,
  `movie_name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `show_times_id`, `movie_name`) VALUES
(1, 1, '3 idiots'),
(2, 2, 'fanna'),
(3, 3, 'dil'),
(4, 4, 'Rstdm'),
(5, 1, 'Bahubali'),
(6, 2, 'shingham returns'),
(7, 3, 'fiza'),
(8, 4, 'Huntur'),
(9, 1, 'D day'),
(10, 2, 'Mardani'),
(11, 3, 'Gangs of washipur 1'),
(12, 3, 'Gangs of washipur2');

-- --------------------------------------------------------

--
-- Table structure for table `seat`
--

CREATE TABLE IF NOT EXISTS `seat` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `seat_name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dumping data for table `seat`
--

INSERT INTO `seat` (`id`, `seat_name`) VALUES
(1, 'A1'),
(2, 'A11'),
(3, 'B1'),
(4, 'B11'),
(5, 'C1'),
(6, 'C11'),
(7, 'D1'),
(8, 'D11'),
(9, 'E1'),
(10, 'E11'),
(11, 'F1'),
(12, 'F11'),
(13, 'G1'),
(14, 'G11'),
(15, 'H1'),
(16, 'H11'),
(17, 'I1'),
(18, 'I11');

-- --------------------------------------------------------

--
-- Table structure for table `shows`
--

CREATE TABLE IF NOT EXISTS `shows` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `show_times` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `shows`
--

INSERT INTO `shows` (`id`, `show_times`) VALUES
(1, '10 - 1'),
(2, '1 - 4'),
(3, '4 - 7'),
(4, '7 - 10');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
