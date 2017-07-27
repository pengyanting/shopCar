-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-07-27 11:35:14
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- 表的结构 `cart`
--

CREATE TABLE IF NOT EXISTS `cart` (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `uid` char(16) NOT NULL,
  `cid` char(16) NOT NULL,
  `name` char(16) NOT NULL,
  `price` char(16) NOT NULL,
  `quantity` char(16) NOT NULL,
  `status` char(16) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;

--
-- 转存表中的数据 `cart`
--

INSERT INTO `cart` (`id`, `uid`, `cid`, `name`, `price`, `quantity`, `status`) VALUES
(6, '20', '2', 'qdqwqw', '12', '25', 'yes'),
(7, '20', '3', 'qqq', '4', '18', 'yes'),
(9, '20', '1', 'qdqwqw', '12', '3', 'no'),
(16, '20', '4', 'ssss', '222', '6', 'no');

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

CREATE TABLE IF NOT EXISTS `goods` (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `goodName` char(255) NOT NULL,
  `goodPrice` char(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`id`, `goodName`, `goodPrice`) VALUES
(1, 'qdqwqw', '12'),
(2, 'qdqwqw', '12'),
(3, 'qqq', '4'),
(4, 'ssss', '222');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `username` char(16) NOT NULL,
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `password` char(16) NOT NULL,
  `phone` int(16) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=23 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`username`, `id`, `password`, `phone`) VALUES
('aaaa', 1, '1111', 111111),
('111111', 2, '1111111', 2147483647),
('111', 3, '111', 111),
('11121', 4, '111', 111113),
('111213', 5, '111', 1111133),
('1112131', 6, '111', 11111331),
('11', 7, '111', 11111),
('123', 8, '111', 12112),
('22', 9, '22', 12111),
('1111', 10, '1111', 111121),
('11111', 11, '1111', 1111211),
('333', 12, '33', 333),
('121121', 13, '111111', 2147483647),
('1211217', 14, '111111', 2147483647),
('11112321', 15, '111111', 2147483647),
('1w1w1', 16, '111111w', 121212),
('1w1w1w', 17, '111111wwww', 1212122),
('1w1w1ww', 18, '111111wwww', 1212122321),
('121wwasd', 19, '111111', 121212121),
('张三', 20, '111111', 1212121221),
('张三1', 21, '111111', 121229),
('我问问', 22, '1111', 11122125);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
