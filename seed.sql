USE employdb;

INSERT INTO department (name)
 VALUES ("Brittany");

 INSERT INTO role (title, salary, department_id)
 VALUES ("Manager", 30000, 1);

 INSERT INTO employee (first_name, last_name, role_id, manger_id)
 VALUES ("Brittany", "Loy", 1, 1);


SELECT * FROM employee, role, department
