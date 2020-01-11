DROP DATABASE IF EXISTS employdb;

CREATE DATABASE employdb;

USE employdb;
-- I TOOK OUT THE FOREIGN KEY
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,

  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NULL,
  manger_id INT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(role_id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  salary DECIMAL(10,2) NULL,
  department_id INT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id)
);

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  
  PRIMARY KEY (id)
);

INSERT INTO products (flavor, price, quantity)
VALUES ("vanilla", 2.50, 100);

INSERT INTO products (flavor, price, quantity)
VALUES ("chocolate", 3.10, 120);

INSERT INTO products (flavor, price, quantity)
VALUES ("strawberry", 3.25, 75);


SELECT * FROM employee, role, department
-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
