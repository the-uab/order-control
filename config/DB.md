
-- 
-- TABLE: budget 
--

CREATE TABLE budget(
    Id_budget         INT            AUTO_INCREMENT,
    Id_department     INT            NOT NULL,
    budget_balance    FLOAT(8, 0),
    PRIMARY KEY (Id_budget, Id_department)
)ENGINE=MYISAM
;



-- 
-- TABLE: cat_product 
--

CREATE TABLE cat_product(
    id_cat    INT                     AUTO_INCREMENT,
    office    NATIONAL VARCHAR(80)    NOT NULL,
    others    NATIONAL VARCHAR(80),
    Otros     NATIONAL VARCHAR(80),
    PRIMARY KEY (id_cat)
)ENGINE=MYISAM
;



-- 
-- TABLE: department 
--

CREATE TABLE department(
    Id_department      INT                     AUTO_INCREMENT,
    name_department    NATIONAL VARCHAR(20),
    PRIMARY KEY (Id_department)
)ENGINE=MYISAM
;



-- 
-- TABLE: detail_order 
--

CREATE TABLE detail_order(
    Id_myorder         INT    NOT NULL,
    Id_user            INT    NOT NULL,
    Id_person          INT    NOT NULL,
    id_detail_order    INT    AUTO_INCREMENT,
    Id_department      INT    NOT NULL,
    id_role            INT    NOT NULL,
    product_amount     INT    NOT NULL,
    PRIMARY KEY (Id_myorder, Id_user, Id_person, id_detail_order, Id_department, id_role)
)ENGINE=MYISAM
;



-- 
-- TABLE: movements 
--

CREATE TABLE movements(
    Id_budget          INT            NOT NULL,
    Id_department      INT            NOT NULL,
    current_balance    FLOAT(8, 0),
    date_movements     DATETIME,
    PRIMARY KEY (Id_budget, Id_department)
)ENGINE=MYISAM
;



-- 
-- TABLE: myorder 
--

CREATE TABLE myorder(
    Id_myorder       INT         AUTO_INCREMENT,
    Id_user          INT         NOT NULL,
    Id_person        INT         NOT NULL,
    Id_department    INT         NOT NULL,
    id_role          INT         NOT NULL,
    date_order       DATETIME,
    PRIMARY KEY (Id_myorder, Id_user, Id_person, Id_department, id_role)
)ENGINE=MYISAM
;



-- 
-- TABLE: person 
--

CREATE TABLE person(
    Id_person    INT                     AUTO_INCREMENT,
    email        NATIONAL VARCHAR(30),
    celular      NATIONAL VARCHAR(10),
    name         NATIONAL VARCHAR(30),
    last_name    NATIONAL VARCHAR(50),
    ci           NATIONAL VARCHAR(15),
    phone        NATIONAL VARCHAR(15),
    address      NATIONAL VARCHAR(50),
    PRIMARY KEY (Id_person)
)ENGINE=MYISAM
;



-- 
-- TABLE: product 
--

CREATE TABLE product(
    Id_product         INT            AUTO_INCREMENT,
    Id_myorder         INT            NOT NULL,
    Id_user            INT            NOT NULL,
    Id_person          INT            NOT NULL,
    id_detail_order    INT            NOT NULL,
    Id_department      INT            NOT NULL,
    id_cat             INT            NOT NULL,
    id_role            INT            NOT NULL,
    price              FLOAT(8, 0),
    stock              FLOAT(8, 0),
    PRIMARY KEY (Id_product, Id_myorder, Id_user, Id_person, id_detail_order, Id_department, id_cat, id_role)
)ENGINE=MYISAM
;



-- 
-- TABLE: role 
--

CREATE TABLE role(
    id_role      INT                     AUTO_INCREMENT,
    name_role    NATIONAL VARCHAR(20),
    PRIMARY KEY (id_role)
)ENGINE=MYISAM
;



-- 
-- TABLE: status 
--

CREATE TABLE status(
    id_status        INT                     AUTO_INCREMENT,
    Id_myorder       INT                     NOT NULL,
    Id_user          INT                     NOT NULL,
    Id_person        INT                     NOT NULL,
    Id_department    INT                     NOT NULL,
    id_role          INT                     NOT NULL,
    name_status      NATIONAL VARCHAR(20),
    PRIMARY KEY (id_status, Id_myorder, Id_user, Id_person, Id_department, id_role)
)ENGINE=MYISAM
;



-- 
-- TABLE: user 
--

CREATE TABLE user(
    Id_user      INT                     AUTO_INCREMENT,
    Id_person    INT                     NOT NULL,
    id_role      INT                     NOT NULL,
    password     NATIONAL VARCHAR(30),
    PRIMARY KEY (Id_user, Id_person, id_role)
)ENGINE=MYISAM
;



-- 
-- TABLE: budget 
--

ALTER TABLE budget ADD CONSTRAINT Refdepartment28 
    FOREIGN KEY (Id_department)
    REFERENCES department(Id_department)
;


-- 
-- TABLE: detail_order 
--

ALTER TABLE detail_order ADD CONSTRAINT Refmyorder26 
    FOREIGN KEY (Id_myorder, Id_user, Id_person, Id_department, id_role)
    REFERENCES myorder(Id_myorder, Id_user, Id_person, Id_department, id_role)
;


-- 
-- TABLE: movements 
--

ALTER TABLE movements ADD CONSTRAINT Refbudget29 
    FOREIGN KEY (Id_budget, Id_department)
    REFERENCES budget(Id_budget, Id_department)
;


-- 
-- TABLE: myorder 
--

ALTER TABLE myorder ADD CONSTRAINT Refuser25 
    FOREIGN KEY (Id_user, Id_person, id_role)
    REFERENCES user(Id_user, Id_person, id_role)
;

ALTER TABLE myorder ADD CONSTRAINT Refdepartment27 
    FOREIGN KEY (Id_department)
    REFERENCES department(Id_department)
;


-- 
-- TABLE: product 
--

ALTER TABLE product ADD CONSTRAINT Refdetail_order30 
    FOREIGN KEY (Id_myorder, Id_user, Id_person, id_detail_order, Id_department, id_role)
    REFERENCES detail_order(Id_myorder, Id_user, Id_person, id_detail_order, Id_department, id_role)
;

ALTER TABLE product ADD CONSTRAINT Refcat_product32 
    FOREIGN KEY (id_cat)
    REFERENCES cat_product(id_cat)
;


-- 
-- TABLE: status 
--

ALTER TABLE status ADD CONSTRAINT Refmyorder33 
    FOREIGN KEY (Id_myorder, Id_user, Id_person, Id_department, id_role)
    REFERENCES myorder(Id_myorder, Id_user, Id_person, Id_department, id_role)
;


-- 
-- TABLE: user 
--

ALTER TABLE user ADD CONSTRAINT Refperson23 
    FOREIGN KEY (Id_person)
    REFERENCES person(Id_person)
;

ALTER TABLE user ADD CONSTRAINT Refrole34 
    FOREIGN KEY (id_role)
    REFERENCES role(id_role)
;




```
--  -------------------------------------------------- /
--  Generated by Enterprise Architect Version 10.0.1009/
--  Created On : domingo, 17 mayo, 2015 /
--  DBMS       : MySql /
--	Dos tablas para el modulo de productos ejecutar en orden
--	primero TPAR_CATEGORIA_ITEM y luego T_ITEM
--  -------------------------------------------------- /
USE order
;
CREATE TABLE TPAR_CATEGORIA_ITEM
(
	ID_CATEGORIA_ITEM INTEGER NOT NULL AUTO_INCREMENT,
	DESCRIPCION VARCHAR(100),
	PRIMARY KEY (ID_CATEGORIA_ITEM)

) 
;


USE order
;
DROP TABLE IF EXISTS T_ITEM CASCADE
;
CREATE TABLE T_ITEM
(
	ID_ITEM INTEGER NOT NULL AUTO_INCREMENT,
	ID_CATEGORIA_ITEM INTEGER,
	DESCRIPCION VARCHAR(100),
	COSTO DECIMAL(15,4),
	PRECIO DECIMAL(15,4),
	FECHA_COMPRA DATETIME,
	STOCK INTEGER,
	PRIMARY KEY (ID_ITEM),
	KEY (ID_CATEGORIA_ITEM)

) 
;


ALTER TABLE T_ITEM ADD CONSTRAINT FK_T_ITEM_TPAR_CATEGORIA_ITEM 
	FOREIGN KEY (ID_CATEGORIA_ITEM) REFERENCES TPAR_CATEGORIA_ITEM (ID_CATEGORIA_ITEM)
	ON DELETE CASCADE ON UPDATE CASCADE
;


