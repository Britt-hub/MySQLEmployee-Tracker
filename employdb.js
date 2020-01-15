var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "bootcamp",
  database: "employdb"
});

// for heroku 
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
  console.log('see employees');
  inquirer 
    .prompt({
      name: "employees",
      type: "list"

    })
    .then(function(data) {
      var query ="SELECT employee,"
      connection.query(query, { data: data.employee}, function(err,res) {
        for (var i = 0; i < res.length; i++) {
          console.log("");
        }
        runSearch();
      });
    });
}

function viewAllDepartment() {
  console.log("department");
}

function viewAllManager() {
  console.log("Manager");
}

function viewAllRemovewEmployees() {
  console.log("adding");
}

function viewAllAddEmployees() {
  console.log("Manager");
}

function updateEmployeeRole() {
  console.log("Update");
}

function updateEmployerManager() {
  console.log("update employer manager");
}

// app.listen(PORT, function () {
//   console.log(`server is running on port ${PORT}`);
// })
