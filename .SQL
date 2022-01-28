CREATE DATABASE chalky;


CREATE TABLE chalky (
    id INT AUTO_INCREMENT,
    nazev VARCHAR(255),
    img VARCHAR(1000),
    datum VARCHAR(1000),
    starts INT(1),
    PRIMARY KEY(id)
);

INSERT INTO chalky(nazev, img, datum, stars) VALUES('dobrej chálec💯' , 'https://www.chiropracticmoves.com.au/wp-content/uploads/2019/12/Junk-food.jpg', now(), 0);
INSERT INTO comments(body, posted_date, chalka_id) VALUES('dobrej oběd', now(), 1);


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

ALTER TABLE comments
ADD COLUMN stars INT(1);

ALTER TABLE comments
RENAME COLUMN strars TO stars;

ALTER TABLE comments DEFAULT CHARSET=utf8mb4;

ALTER TABLE comments CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;

ALTER DATABASE bcpjg9hximgkbe8ysn9a CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

ALTER TABLE comments CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE chalky MODIFY nazev TEXT CHARSET utf8mb4;

ALTER TABLE messages MODIFY content BLOB;