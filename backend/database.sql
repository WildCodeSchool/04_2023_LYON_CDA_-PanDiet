SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS user, recipe, personnal_recipe;
SET FOREIGN_KEY_CHECKS=1;


CREATE TABLE user (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  city varchar(255) NULL,
  password varchar(255) NOT NULL,
  email varchar(255) UNIQUE NOT NULL
  
);
 INSERT INTO user (firstname, lastname, city,  password, email) VALUES ("Sahrane", "Guassemi", "Lyon", "password", "sahrane@cp.com");

CREATE TABLE recipe (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  ingredients varchar(255) NOT NULL,
  instructions varchar(255)  NULL,
  image varchar(255) NOT NULL,
  cook_time varchar(255) NOT NULL,
  colories int(11) NOT NULL,
  recipe_link varchar(255)  NULL,
  labels varchar(255)  NULL, 
  user_id int(11) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id)


);

INSERT INTO recipe (name, description, ingredients, instructions, image, cook_time, colories, recipe_link, labels, user_id) VALUES ("Tacos", "Galette qui comporte de la viande, des frites, des crudités et différentes sauces", "viandes, frite,sauce, sel, poivre", "Faire cuire le poulet", "https://shorturl.at/egHU5", "30 min", 500, "https://www.seriouseats.com/chicken-vesuvio-recipe", "poulet, curry", 1);





CREATE TABLE personnal_recipe (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255)  NULL,
  description varchar(255)  NULL,
  ingredients varchar(255)  NULL,
  instructions varchar(255)  NULL,
  image varchar(255)  NULL,
  cook_time varchar(255)  NULL,
  colories int(11)  NULL,
  recipe_link varchar(255) UNIQUE NULL,
  labels varchar(255)  NULL, 
  user_id int(11) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id)


); 
INSERT INTO personnal_recipe (name, description, ingredients, instructions, image, cook_time, colories, recipe_link, labels, user_id) VALUES ("Poulet au curry", "Un poulet au curry", "poulet, curry, sel, poivre", "Faire cuire le poulet", "https://shorturl.at/egHU5", "30 min", 500, "https://www.seriouseats.com/chicken-vesuvio-recipe", "poulet, curry", 1);

