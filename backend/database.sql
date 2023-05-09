SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS user, recipe, personnal_recipe;
SET FOREIGN_KEY_CHECKS=1;


CREATE TABLE user (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  
  avatar varchar(255)  NULL,
  password varchar(255) NOT NULL,
  email varchar(255) UNIQUE NOT NULL
  
);
 INSERT INTO user (firstname, lastname, avatar, password, email) VALUES ("Sahrane", "Guassemi","https://zupimages.net/viewer.php?id=23/18/ep2i.jpg", "password", "sahrane@cp.com");

CREATE TABLE recipe (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  ingredients JSON NOT NULL,
  image varchar(255) NOT NULL,
  mealType varchar(255),
  cook_time varchar(255) NOT NULL,
  colories int(11) NOT NULL,
  recipe_link varchar(255)  NULL,
  labels varchar(255)  NULL, 
  user_id int(11) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id)

);


CREATE TABLE personnal_recipe (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255)  NULL,
  ingredients JSON  NULL,
  instructions JSON  NULL,
  image varchar(255)  NULL,
  mealType varchar(255) NULL,
  cook_time varchar(255)  NULL,
  cuisineType varchar(255) NULL, 
  user_id int(11) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id)
); 