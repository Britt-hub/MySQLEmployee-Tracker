var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // My  port; 
  port: 3306,

  // The username
  user: "root",

  // The generic  password
  password: "bootcamp",
  database: "employdb"
});

// for heroku which I may not even need this
const PORT = process.env.PORT || 3306;

connection.connect(function (err) {

  if (err) throw err;
  // else
  console.log("connected as id " + connection.threadId);
  runSearch();

});

function runSearch() {

  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "options",
        choices: [
          "View All employees",
          "View All Employees by Department",
          "View All Employees by Manager",
          "Add Employees",
          "Remove Empoyees",
          "Update EMployee Role",
          "Update Employer Manager"
        ]
      },

    ]).then(function (data) {
      console.log(data.options);

      switch (data.options) {
        case "View All employees":
          viewAllEmlployees();
          break;
        case "View All Employees by Department":
          viewAllDepartment();
          break;
        case "View All Employees by Manager":
          viewAllManager();
          break;
        case "Add Employees":
          AddEmployees();
          break;

        case "Remove Empoyees":
          viewAllRemovewEmployees();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;

        case "Update Employer Manager":
          updateEmployerManager();
          break;
      }
    }

    );
}
//look at this portion of the code. confused on the .prompt//////////////////////////////////
function viewAllEmlployees() {
  var query = "SELECT * FROM employee  INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id";
  connection.query(query, function (err, res) {

    console.log('id      first_name      last_name      title                     department           salary      manager')
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id.toString().padEnd(7), res[i].first_name.padEnd(15), res[i].last_name.padEnd(14), res[i].title.padEnd(25), res[i].name.padEnd(20), res[i].salary.toString().padEnd(16), res[i].manager_id.toString().padEnd(12))


    }
    runSearch();


  })
}
///////////////////////////////////////////////////////////////////////////////////
function viewAllDepartment() {
  var query = "SELECT department.name FROM department";
  connection.query(query, function (err, res) {
    var departmentNames = []
    for (var i = 0; i < res.length; i++) {
      departmentNames.push(res[i].name);
    }
    // runSearch();
    inquirer
      .prompt({
        name: "department",
        type: "list",
        choices: departmentNames


      })
      .then(function (data) {
       
        var query =
          "SELECT * FROM employee " +
          "INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id " +
          "WHERE department.name = '" + data.department + "'"
        console.log(query)
        connection.query(query, { data: data.employee }, function (err, res) {
          console.log('id      first_name      last_name      title                     department           salary      manager')
          for (var i = 0; i < res.length; i++) {
            console.log(res[i].id.toString().padEnd(7), res[i].first_name.padEnd(15), res[i].last_name.padEnd(14), res[i].title.padEnd(25), res[i].name.padEnd(20), res[i].salary.toString().padEnd(16), res[i].manager_id.toString().padEnd(12))


          }
          runSearch();
        });
      });
  })
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function viewAllManager() {
  var query = "SELECT manager.name FROM manager ";
  connection.query(query, function (err, res) {
    var managerNames = []
    for (var i = 0; i < res.length; i++) {
      managerNames.push(res[i].name);
    }
    // runSearch();
    inquirer
      .prompt({
        name: "manager",
        type: "list",
        choices: departmentNames
      })

      .then(function (data) {
        var query = "SELECT mangager,"
        connection.query(query, { data: data.manager }, function (err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("");
          }
          runSearch();
        });
      });
  })

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function AddEmployees() {
  var query = "SELECT * FROM role ";
  connection.query(query, function (err, res) {
    var roleNames = []
    for (var i = 0; i < res.length; i++) {
      roleNames.push(res[i].title);
    }
  inquirer
      .prompt([{
        name: "FirstName",
        message: "What is the employe's first name?",
        type: "input"
    },{
      name: "LastName",
      message: "What is employe's last name?",
      type: "input"
    },{
      name: "Role",
        message: "What is the employe's role?",
        type: "list",
        choices: roleNames
    }])
      
    .then(function (data) {
      
              // var query = "SELECT role,"
              // connection.query(query, { data: data.employee }, function (err, res) {
              //   for (var i = 0; i < res.length; i++) {
              //     console.log("");
              //   }
              //   runSearch();
              });
            });
          }
    // runSearch();

//     inquirer
//       .prompt({
//         name: "department",
//         type: "list",
//         choices: departmentNames

//       })
//       .then(function (data) {
//         var query = "SELECT employee,"
//         connection.query(query, { data: data.employee }, function (err, res) {
//           for (var i = 0; i < res.length; i++) {
//             console.log("");
//           }
//           runSearch();
//         });
//       })
//   })
// }
// //////////ADDING EMPLOYEES//////////////////////////////////////////////////////////////////////////////
// function viewAllAddEmployees() {
//   var query = "SELECT ";
//   connection.query(query, function (err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].data);
//     }
//     runSearch();
//   });
// }

// function updateEmployeeRole() {
//   console.log("Update");
//   var query = "SELECT ";
//   connection.query(query, function (err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].data);
//     }
//     runSearch();
//   });
// }

// function updateEmployerManager() {
//   console.log("update employer manager");
//   var query = "SELECT ";
//   connection.query(query, function (err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].data);
//     }
//     runSearch();
//   });
// }


