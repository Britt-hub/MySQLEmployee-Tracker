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
  gettingCommandLine();

});

function gettingCommandLine() {

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
          viewAllAddEmployees();
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
//look at this portion of the code. confused on the .prompt
function viewAllEmlployees() {
  var query = "SELECT employee.first_name, employee.last_name FROM employee";
  connection.query(query, function (err, res) {
    var employeeNames = []
    for (var i = 0; i < res.length; i++) {
      employeeNames.push(res[i].first_name + " " + res[i].last_name);
    }
    // runSearch();

    inquirer
      .prompt({
        name: "employees",
        type: "list",
        choices: employeeNames

      })
      .then(function (data) {
        var query = "SELECT employee,"
        connection.query(query, { data: data.employee }, function (err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("");
          }
          runSearch();
        });


      });
  })
}

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
        var query = "SELECT employee,"
        connection.query(query, { data: data.employee }, function (err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("");
          }
          runSearch();
        });
      })
  })
}

function viewAllManager() {
  console.log("Manager");
  var query = "SELECT ";
  connection.query(query, function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].artist);
    }
    runSearch();
  });


}

function viewAllRemovewEmployees() {
  console.log("adding");
  var query = "";
  connection.query(query, function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].data);
    }
    runSearch();
  });
}

function viewAllAddEmployees() {
  console.log("Manager");
  var query = "SELECT ";
  connection.query(query, function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].data);
    }
    runSearch();
  });
}

function updateEmployeeRole() {
  console.log("Update");
  var query = "SELECT ";
  connection.query(query, function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].data);
    }
    runSearch();
  });
}

function updateEmployerManager() {
  console.log("update employer manager");
  var query = "SELECT ";
  connection.query(query, function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].data);
    }
    runSearch();
  });
}


