-- Create a table for User
CREATE TABLE User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    addr1 VARCHAR(255) NOT NULL,
    addr2 VARCHAR(255),
    state VARCHAR(255) NOT NULL,
    zip VARCHAR(10) NOT NULL
);

-- Create a table for Tank
CREATE TABLE Tank (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    picId INT,
    description TEXT,
    size VARCHAR(50),
    userId INT,
    FOREIGN KEY (userId) REFERENCES User(id)
);

-- Create a table for Measure
CREATE TABLE Measure (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    sample DECIMAL(10, 2) NOT NULL,
    tankId INT,
    FOREIGN KEY (tankId) REFERENCES Tank(id)
);