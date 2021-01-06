-- table names are always plural and they are alwasys snake case

-- What fields do we want?
  -- ID
  -- Species
  -- Image
  -- Description

CREATE TABLE animals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  species text,
  description TEXT,
  image TEXT
);
