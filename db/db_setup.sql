DROP TABLE IF EXISTS users;
CREATE TABLE users(
  id serial NOT NULL PRIMARY KEY,
  username varchar(100) NOT NULL,
  email varchar(255) NOT NULL,
  create_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now()
);

INSERT INTO users (username, email) 
VALUES('foo', 'foo@example.com');