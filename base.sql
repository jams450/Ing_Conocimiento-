create database ing_cono;
use ing_cono;

create table ventas(
	tienda varchar(10),
    producto varchar(10)
);

insert into ventas values('A','TV');
insert into ventas values('A','Radio');
insert into ventas values('A','TV');
insert into ventas values('A','TV');
insert into ventas values('A','TV');
insert into ventas values('A','Radio');
insert into ventas values('A','TV');
insert into ventas values('A','TV');
insert into ventas values('A','TV');
insert into ventas values('A','Radio');
insert into ventas values('A','TV');
insert into ventas values('A','TV');
insert into ventas values('A','Radio');
insert into ventas values('A','Radio');
insert into ventas values('A','Radio');
insert into ventas values('A','TV');
insert into ventas values('A','TV');
insert into ventas values('A','Radio');
insert into ventas values('A','TV');

insert into ventas values('B','Radio');
insert into ventas values('B','TV');
insert into ventas values('B','Radio');
insert into ventas values('B','Radio');
insert into ventas values('B','Radio');
insert into ventas values('B','TV');
insert into ventas values('B','TV');
insert into ventas values('B','Radio');
insert into ventas values('B','TV');
insert into ventas values('B','Radio');
insert into ventas values('B','TV');
insert into ventas values('B','TV');
insert into ventas values('B','Radio');
insert into ventas values('B','Radio');
insert into ventas values('B','TV');
insert into ventas values('B','TV');
insert into ventas values('B','Radio');
insert into ventas values('B','TV');
insert into ventas values('B','Radio');
insert into ventas values('B','TV');
insert into ventas values('B','TV');
insert into ventas values('B','Radio');
insert into ventas values('B','Radio');
insert into ventas values('B','TV');
insert into ventas values('B','TV');

select * from ventas ;

select count(*) as Contador, tienda, producto from ventas group by tienda,producto;

select distinct tienda from ventas;

select distinct producto from ventas;