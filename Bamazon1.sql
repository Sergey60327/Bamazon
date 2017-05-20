CREATE DATABASE bamazon1_db;

USE bamazon1_db;

CREATE TABLE products(
  
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  departement_name VARCHAR(50) NOT NULL,
  price DECIMAL(18,2),
  stock_quantity INT,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, departement_name, price, stock_quantity)
VALUES ("Mazeratti", "Cars", 299999.99, 10);
INSERT INTO products (product_name, departement_name, price, stock_quantity)
VALUES ("Bugatti", "Cars", 199999.99, 5);
INSERT INTO products (product_name, departement_name, price, stock_quantity)
VALUES ("Sofa", "Furniture", 400.00, 80);
INSERT INTO products (product_name, departement_name, price, stock_quantity)
VALUES ("Dining Table", "Furniture", 1000.00, 100);
INSERT INTO products (product_name, departement_name, price, stock_quantity)
VALUES ("Sticker", "Accessoires", 5.00, 200);
INSERT INTO products (product_name, departement_name, price, stock_quantity)
VALUES ("Frame", "Accesoires", 2.99, 1000);
INSERT INTO products (product_name, departement_name, price, stock_quantity)
VALUES ("Used Mattress", "Accesoires", 22.00, 10);
INSERT INTO products (product_name, departement_name, price, stock_quantity)
VALUES ("Pinor Noir", "Wine", 100.00, 10);
INSERT INTO products (product_name, departement_name, price, stock_quantity)
VALUES ("Chardonnay", "Wine", 99.99, 10);
INSERT INTO products (product_name, departement_name, price, stock_quantity)
VALUES ("Cabernet", "Wine", 290.00, 25);

select * from products;
