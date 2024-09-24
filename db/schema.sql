\c data_wharehouse_dev

CREATE TABLE sample_0826 (
  id SERIAL PRIMARY KEY,
  fname VARCHAR(15),
  lname TEXT,
  city TEXT,
  date TIMESTAMP DEFAULT NOW()
);

INSERT INTO sample_0826 (fname, lname, city) VALUES ('Kenti', 'Johnson', 'New York'),
('Mouldi', 'Souissi','QC'),
('Bruce', 'Wayne','London'),
('Peter', 'Parker','New York');