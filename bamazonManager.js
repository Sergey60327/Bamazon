var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "a16089180",
  database: "bamazon1_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

function displayItems() {
     connection.query('SELECT * FROM products', function(err, items) {
          if (err) throw err;
          for(var i = 0; i < items.length; i++) {
          console.log("Item ID: " + items[i].item_id + " | Product: " + items[i].product_name + " | Department: " + items[i].departement_name + " | Price: " +  items[i].price + " | Quantity: " + items[i].stock_quantity);
          } // Closes for loop
     }); // Closes connection.query
}

inquirer.prompt([

  {
        type: "list",
        message: "Select an action",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
        name: "selection"
  }
displayItems();
