DROP DATABASE IF EXISTS test22;
CREATE DATABASE test22;

USE test22;
-- CREATE TABLE 'employees'
-- (
--   ' id' int  AUTO_INCREMENT PRIMARY KEY, 
--    ' employeename' varchar
-- (100),
--     'employeenuber' varchar
-- (32),

-- );


CREATE TABLE employees
(
    name VARCHAR(20),
    owner VARCHAR(20),
    species VARCHAR(20),
    sex CHAR(1),
    birth DATE,
    death DATE
);

insert  into employees
VALUES('GREAT IS GOOD',
        'DAAY WOMAN ',
        'BLACK',
        'M',
        '1909-01-10',
        NULL
);

CREATE TABLE shop
(
    article INT DEFAULT '0000' NOT NULL,
    dealer CHAR (20) DEFAULT '' NOT NULL,
    price DECIMAL (16,2) DEFAULT '0.00' NOT NULL,
    PRIMARY KEY (article, dealer)
);

INSERT INTO shop
VALUES
    (1, 'A', 3.45),
    (1, 'B', 3.99),
    (2, 'A', 10.99),
    (3, 'B', 1.45),
    (3, 'C', 1.69),
    (3, 'D', 1.25),
    (4, 'D', 19.95);