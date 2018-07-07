DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE usernames (
  usernames_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  PRIMARY KEY(usernames_id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  messages_id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(255) NOT NULL,
  username VARCHAR(255),
  roomname VARCHAR(100),
  PRIMARY KEY(messages_id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

