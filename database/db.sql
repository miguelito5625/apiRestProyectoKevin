

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

    DROP TABLE mini_finca;
    CREATE TABLE mini_finca(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_mini_finca VARCHAR(50) NOT NULL
    );

    DROP TABLE seccion_mini_finca;
    CREATE TABLE seccion_mini_finca(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_seccion_mini_finca VARCHAR(50) NOT NULL,
    id_mini_finca INT NOT NULL,
    CONSTRAINT fk_seccion_mini_finca FOREIGN KEY(id_mini_finca) REFERENCES mini_finca(id)
    );

    DROP TABLE viaje;

    CREATE TABLE viaje(
    id INT PRIMARY KEY AUTO_INCREMENT,
    numero_viaje INT NOT NULL,
    id_aerista INT NOT NULL,
    id_mini_finca INT NOT NULL,
    id_seccion_mini_finca INT NOT NULL,
    amarillo INT DEFAULT 0,
    negro INT DEFAULT 0,
    rojo INT DEFAULT 0,
    verde INT DEFAULT 0,
    morado INT DEFAULT 0,
    cafe INT DEFAULT 0,
    naranja INT DEFAULT 0,
    azul INT DEFAULT 0,
    updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    created_at TIMESTAMP NOT NULL,
    CONSTRAINT fk_aerista_viaje FOREIGN KEY (id_aerista) REFERENCES aerista(id),
    CONSTRAINT fk_mini_finca_viaje FOREIGN KEY (id_mini_finca) REFERENCES mini_finca(id),
    CONSTRAINT fk_seccion_mini_finca_viaje FOREIGN KEY (id_seccion_mini_finca) REFERENCES seccion_mini_finca(id)
    );

    

DROP VIEW vista_todos_los_viajes;

CREATE VIEW vista_todos_los_viajes AS
SELECT viaje.id, viaje.numero_viaje AS numeroViaje, CONCAT(aerista.nombre1, " ", aerista.apellido1) AS nombreAerista,
aerista.id AS idAerista, mini_finca.nombre_mini_finca, mini_finca.id as idMiniFinca, seccion_mini_finca.id AS idSeccionMiniFinca, 
seccion_mini_finca.nombre_seccion_mini_finca, viaje.amarillo, viaje.negro, viaje.rojo, viaje.verde, viaje.morado, viaje.cafe, 
viaje.naranja, viaje.azul, viaje.updated_at, viaje.created_at
FROM (((viaje
INNER JOIN aerista ON viaje.id_aerista = aerista.id)
INNER JOIN mini_finca ON viaje.id_mini_finca = mini_finca.id)
INNER JOIN seccion_mini_finca ON viaje.id_seccion_mini_finca = seccion_mini_finca.id);





//Para consulta por dia concreto
SELECT * FROM viaje
WHERE DATE(created_at) = '2019-09-08'

//Para consulta entre un rango de fechas
SELECT * FROM viaje
WHERE DATE(created_at) BETWEEN '2019-09-07' AND '2019-09-08'