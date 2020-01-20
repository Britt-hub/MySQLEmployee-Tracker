1       Brittany        Loy            Manager                   Accounting           30000            1           
2       James           Brian          Executive of HR           Human Resources      70000            2           
3       Robin           Smith          Business Manager          Financial Services   90000            3                     
4       Carlissa        Edmonson       Accounts Payable          Financial Services   76000            5           
5       Jill            Scott          Recruitor                 Payroll              46000            6           
6       Whitney         Houston        Auditor                   Admissions Office    67000            7           
7       Lauryn          Hill           Agent                     Collections          36000            8           
8       Erykah          Badu           Tech Support              Sales                66000            9 


INSERT INTO department (name)
VALUES ("Manager");
INSERT INTO department (name)
VALUES ("Executive of HR");
INSERT INTO department (name)
VALUES ("Marketing");
INSERT INTO department (name)
VALUES ("Accounts Payable");
INSERT INTO department (name)
VALUES ("Recruitor");
INSERT INTO department (name)
VALUES ("Auditor");
INSERT INTO department (name)
VALUES ("Agent");
INSERT INTO department (name)
VALUES ("Tech Support");



INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 43000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Executive of HR", 80000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Marketing", 60000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Accounts Payable", 79000, 5);
INSERT INTO role (title, salary, department_id)
VALUES ("Recruitor", 66000, 6);
INSERT INTO role (title, salary, department_id)
VALUES ("Auditor", 75000, 7);
INSERT INTO role (title, salary, department_id)
VALUES ("Agent", 40000, 8);
INSERT INTO role (title, salary, department_id)
VALUES ("Tech Support", 55000, 9);



INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Carlissa", "Thomas", 4)


-- STOP WORKING AT EMPLOYEE THREE
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Jake", "Calvin", 3)



