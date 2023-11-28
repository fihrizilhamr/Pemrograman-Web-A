create database test;

use test;

CREATE TABLE `users` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(111) NOT NULL,
  `age` int(3) NOT NULL,
  `email` varchar(111) NOT NULL,
  PRIMARY KEY  (`id`)
);