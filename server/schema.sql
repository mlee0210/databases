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
  text_messages VARCHAR(255) NOT NULL,
  user_id INT,
  room VARCHAR(100),
  PRIMARY KEY(messages_id),
  FOREIGN KEY (user_id) REFERENCES usernames(usernames_id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

