/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables.*/

USE grocerylist;

CREATE TABLE list(
  id int auto_increment primary key,
  item varchar(255),
  quantity int
)