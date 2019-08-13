

    DROP TABLE aerista;

	CREATE TABLE aerista(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre1 VARCHAR(50) NOT NULL,
    nombre2 VARCHAR(100) NOT NULL,
    apellido1 VARCHAR(50) NOT NULL,
    apellido2 VARCHAR(100) NOT NULL,
    direccion VARCHAR(150) NOT NULL,
    telefono VARCHAR(20)
	);

    DROP vista_aerista_nc;

    CREATE VIEW vista_aerista_nc AS
    SELECT aerista.id, CONCAT(aerista.nombre1, ' ', aerista.apellido1) AS nombre_aerista 
    FROM aerista;

    

