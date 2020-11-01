
CREATE DATABASE `delilahresto`;


DROP TABLE IF EXISTS `delilahresto`.`users`;
CREATE TABLE `delilahresto`.`users`
(   
    `id` smallint NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
    `email` varchar(50) NOT NULL,
    `password` varchar(20) NOT NULL,
    `phone` varchar(255) NOT NULL,
    `address` varchar(100) NOT NULL,
    `admin` tinyint(1) NOT NULL,
    PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `delilahresto`.`products`;
CREATE TABLE `delilahresto`.`products` 
(
    `id` smallint NOT NULL AUTO_INCREMENT,
    `name` varchar(60) NOT NULL,
    `description` varchar(255) NOT NULL,
    `price` varchar(20) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `delilahresto`.`requests`;
CREATE TABLE `delilahresto`.`requests` 
(
    `id` int NOT NULL AUTO_INCREMENT,
    `request_date` date NOT NULL,
    `status` varchar(255) NOT NULL,
    `payment_method` varchar(255) NOT NULL,
    `userId` smallint DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `userId` (`userId`),
    CONSTRAINT `requests_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `delilahresto`.`orders`;
CREATE TABLE `delilahresto`.`orders` 
(
    `quantity` int NOT NULL,
    `productId` smallint NOT NULL,
    `requestId` int NOT NULL,
    PRIMARY KEY (`productId`,`requestId`),
    KEY `requestId` (`requestId`),
    CONSTRAINT `order_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `order_ibfk_2` FOREIGN KEY (`requestId`) REFERENCES `requests` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `delilahresto`.`users` 
    (`id`,`name`,`email`,`password`,`phone`,`address`,`admin`)
VALUES 
    ('1','Jhonatan Gomez','jhonatan@prueba.com','123456','3206404659','cl 1 # 4 av prueba',1),
    ('2','Alejandro Alvarez','alejandro@prueba.com','000000','3207405659','cl 2 # 6 av prueba2',0);

INSERT INTO `delilahresto`.`products` 
    (`id`,`name`,`description`,`price`)
VALUES 
('1','Hamburguesa','Vegetariana','10000'),
('2','Hot dog','Quesudo','20000'),
('3','Pizza','Hawaiana','20000'),
('4','Carne','A la parrilla','30000');

INSERT INTO `delilahresto`.`requests`
    (`id`,`request_date`,`status`,`Payment_method`,`userId`)
VALUES
    ('1','2020-11-01 19:51:34','nuevo','Efectivo','1'),
    ('2','2020-10-31 10:51:34','En elaboracion','Tarjeta Credito','1');
    

INSERT INTO `delilahresto`.`orders`
    (`quantity`,`productId`,`requestId`)
VALUES
    ('3','1','1'),
    ('2','2','1')


