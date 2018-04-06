create database shop_db;
use shop_db;
create table shop_db.PRODUCTS(
id int primary key auto_increment,
name varchar(250),
price double,
image varchar(250),
makeDate date,
description varchar(250)
);

create table shop_db.REVIEWS(
id int primary key auto_increment,
stars int,
author varchar(250),
body varchar(250),
productId int references shop_db.PRODUCTS(id)
)
