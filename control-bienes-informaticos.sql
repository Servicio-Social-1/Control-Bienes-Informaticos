-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-07-2025 a las 01:36:58
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `control-bienes-informaticos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `device_type`
--

CREATE TABLE `device_type` (
  `PKI_DEVICE_TYPE` int(11) NOT NULL,
  `FC_DESCRIPTION` varchar(200) NOT NULL,
  `FI_ACTIVE` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `device_type`
--

INSERT INTO `device_type` (`PKI_DEVICE_TYPE`, `FC_DESCRIPTION`, `FI_ACTIVE`) VALUES
(1, 'PC', 1),
(2, 'ALL IN ONE', 1),
(3, 'LAPTOP', 1),
(4, 'NOTEBOOK', 1),
(5, 'IMPRESORA', 1),
(6, 'FOTOCOPIADORA', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ip_direction`
--

CREATE TABLE `ip_direction` (
  `PKI_IP_DIRECTION` int(11) NOT NULL,
  `FC_DESCRIPTION` varchar(200) NOT NULL,
  `FC_ARCHITECTURE` varchar(200) NOT NULL,
  `FI_ACTIVE` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `period_time`
--

CREATE TABLE `period_time` (
  `PKI_PERIOD_TIME` int(11) NOT NULL,
  `FC_DESCRIPTION` varchar(200) NOT NULL,
  `FI_ACTIVE` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `period_time`
--

INSERT INTO `period_time` (`PKI_PERIOD_TIME`, `FC_DESCRIPTION`, `FI_ACTIVE`) VALUES
(1, 'Menor a 1 año', 1),
(2, 'De 1 a 3 años', 1),
(3, 'Entre 3 y 5 años', 1),
(4, 'Mayor a 6 años', 1),
(5, 'NO APLICA', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `device_type`
--
ALTER TABLE `device_type`
  ADD PRIMARY KEY (`PKI_DEVICE_TYPE`);

--
-- Indices de la tabla `ip_direction`
--
ALTER TABLE `ip_direction`
  ADD PRIMARY KEY (`PKI_IP_DIRECTION`);

--
-- Indices de la tabla `period_time`
--
ALTER TABLE `period_time`
  ADD PRIMARY KEY (`PKI_PERIOD_TIME`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `device_type`
--
ALTER TABLE `device_type`
  MODIFY `PKI_DEVICE_TYPE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `ip_direction`
--
ALTER TABLE `ip_direction`
  MODIFY `PKI_IP_DIRECTION` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `period_time`
--
ALTER TABLE `period_time`
  MODIFY `PKI_PERIOD_TIME` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
