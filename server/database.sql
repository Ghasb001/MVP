DROP DATABASE IF EXISTS RPP2209;
CREATE DATABASE RPP2209;

USE RPP2209;

DROP TABLE IF EXISTS Students;
CREATE TABLE Students (
  id int NOT NULL AUTO_INCREMENT,
  studentName TEXT,
  git TEXT,
  gitUrl TEXT,
  PRIMARY KEY(id)
);

-- INSERT INTO Students (id, name, git, link) VALUES
-- (1, 'Michaela Lehr', 'Berlin'),
-- (2, 'Michael Wanyoike', 'Nairobi'),
-- (3, 'James Hibbard', 'Munich'),
-- (4, 'Karolina Gawron', 'Wrocław');
-- (5, 'Karolina Gawron', 'Wrocław');
-- (6, 'Karolina Gawron', 'Wrocław');
-- (7, 'Karolina Gawron', 'Wrocław');
-- (8, 'Karolina Gawron', 'Wrocław');
-- (9, 'Karolina Gawron', 'Wrocław');
-- (10, 'Karolina Gawron', 'Wrocław');
-- (11, 'Karolina Gawron', 'Wrocław');
-- (12, 'Karolina Gawron', 'Wrocław');
-- (13, 'Karolina Gawron', 'Wrocław');
-- (14, 'Karolina Gawron', 'Wrocław');
-- (15, 'Karolina Gawron', 'Wrocław');
-- (16, 'Karolina Gawron', 'Wrocław');
-- (17, 'Karolina Gawron', 'Wrocław');
-- (18, 'Karolina Gawron', 'Wrocław');
-- (19, 'Karolina Gawron', 'Wrocław');