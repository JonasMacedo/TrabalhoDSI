CREATE TABLE IF NOT EXISTS animal (
  id serial PRIMARY KEY,
  nome VARCHAR(100),
  raca: VARCHAR(100),
  idade: int,
  sexo: enum('M','F')
);
