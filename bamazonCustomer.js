var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "a16089180",
  database: "bamazon1_db"
});


var selectItem = function {

  connection.query("SELECT item_id, product_name, price FROM products", function(err, results) {
    if (err) throw err;

  inquirer.prompt([{
    name: "choice",
    type: "idlist",
    choices: function(){
    var choiceArray = [];
  for (var i = 0; i < results.length; i++) {
            choiceArray.push(results[i].item_id);
          }
          return choiceArray;
        },

   message: "Please indicate item ID you would like to buy?"

  },
  {
    name: "quantity",
    type: "input",
    message: "How many Units would you like to buy?",
  }
]), then(function(answer) {

  var chosenItem;
for (var i = 0; i < results.length; i++) {
        if (results[i].item_id === answer.choice) {
          chosenItem = results[i];
        }
      }

if (chosenItem.stock_quantity < parseInt(answer.quantity)) {


    }
  }
}
