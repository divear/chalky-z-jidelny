CREATE DATABASE chalky;


CREATE TABLE chalky (
    id INT AUTO_INCREMENT,
    nazev VARCHAR(255),
    img VARCHAR(1000),
    datum VARCHAR(1000),
    starts INT(1),
    PRIMARY KEY(id)
);

INSERT INTO chalky(nazev, img, datum, stars) VALUES('dobrej chálec' , 'https://www.chiropracticmoves.com.au/wp-content/uploads/2019/12/Junk-food.jpg', now(), 0);
INSERT INTO comments(body, posted_date) VALUES('dobrej oběd', now());


SELECT * FROM chalky;

CREATE TABLE comments (
    id INT AUTO_INCREMENT,
    chalka_id INT, 
    body VARCHAR(10000),
    posted_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY(chalka_id) REFERENCES chalky(id)  
);

mysql -h bcpjg9hximgkbe8ysn9a-mysql.services.clever-cloud.com -P 3306 -u uwiqcu29mldh2s5o -p