var mysql = require("mysql");
var inquirer = require("inquirer");
var prompt = require("prompt");

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

// function to get  available items' quantities for purchase and allow user to get items
  function displayItems() {

// query the database for all items available for purchase
  connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
  if (err) throw err;
      console.log("Items available for sale");
      for(var i = 0; i < res.length; i++) {
          	console.log("Item ID: " + res[i].item_id + " | Product Name: " + res[i].product_name +  " | Price: " +  res[i].price);
          }
          inquirer.prompt([

                  	// Here we create a basic text prompt.
                  	{
                      type: "input",
                      name: "id",
                      message: "What is the id of the item you would like to buy?"

                  	},

                       {
                      type: "input",
                      name: "quantity",
                      message: "How many units would you like to buy?"

                  	}

                  //Storing all of the answers into an "answers" object that inquirer makes for us.
                ]).then(function (answer) {
                  var quantity = answer.quantity;
                    var itemId = answer.id;
                    connection.query('SELECT * FROM products WHERE item_id=' + itemId, function(err, selectedItem) {
                    	if (err) throw err;
                                 if (selectedItem[0].stock_quantity - quantity >= 0) {
                                      var chargedPrice = answer.quantity * selectedItem[0].price;
                                    console.log('Thank you for your purchase. Your total is $'+ chargedPrice);

                                      connection.query('UPDATE products SET stock_quantity=? WHERE item_id=?', [selectedItem[0].stock_quantity - quantity, itemId],
                                      function(err, res) {
                                      	if (err) throw err;
                                           // Runs the prompt again, so the user can keep shopping.
                                           displayItems();
                                      });  // Ends the code to remove item from inventory.

                                 }

                                 else {
                                      console.log("Insufficient quantity!");
                                      displayItems();
                                 }
                            });
                       });
                 });
           }


displayItems();
