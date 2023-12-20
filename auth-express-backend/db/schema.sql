
DROP DATABASE IF EXISTS auth_dev;
DROP TABLE IF EXISTS users;


CREATE DATABASE auth_dev;

\c auth_dev;

-- users table
CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- resources table
CREATE TABLE resources (
  resource_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  title VARCHAR(100) NOT NULL,
  content TEXT,
  creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

