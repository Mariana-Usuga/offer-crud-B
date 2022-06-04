CREATE DATABASE offers;

USE offers;

CREATE TABLE offers (
  id INT(100) NOT NULL,
  name VARCHAR(80) NOT NULL
)

ALTER TABLE offers ADD PRIMARY KEY (id);

ALTER TABLE offers MODIFY id INT(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE offers;

  CREATE TABLE characteristics (
    id INT(100) NOT NULL,
    name VARCHAR(80) NOT NULL,
    description TEXT,
    offer_id INT(11),
    CONSTRAINT fk_offer_characteristics FOREIGN KEY (offer_id) REFERENCES offers(id)
  )

ALTER TABLE characteristics ADD PRIMARY KEY (id);

ALTER TABLE characteristics MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE characteristics;


CREATE TABLE prices (
  id INT(100) NOT NULL,
  name VARCHAR(80) NOT NULL,
  description TEXT,
  price_value INT(16) NOT NULL,
  offer_id INT(100),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_offer FOREIGN KEY (offer_id) REFERENCES offers(id)
)

ALTER TABLE prices ADD PRIMARY KEY (id);

ALTER TABLE prices MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE prices;