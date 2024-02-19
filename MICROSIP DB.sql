CREATE TABLE ARTICULOS(
ID_ARTICULO NUMBER,
NOMBRE NVARCHAR2(30),
MEDIDA NVARCHAR2(100),
CLAVE NVARCHAR2(30),
PRECIO FLOAT,
CONSTRAINT PK_ARTICULOS PRIMARY KEY (ID_ARTICULO)
);

INSERT INTO ARTICULOS VALUES (1, 'Guantes de Box', 'Pieza','1182939493',599);
INSERT INTO ARTICULOS VALUES (2, 'Gogles para nadar', 'Pieza','2342939493',199);
INSERT INTO ARTICULOS VALUES (3, 'Balon de futbol #5', 'Pieza','233434433',899);
INSERT INTO ARTICULOS VALUES (4, 'Mancuerna', 'Kilogramo', '348384932', 1200);
INSERT INTO ARTICULOS VALUES (5, 'Cuerda para Saltar', 'Pulgada', '63737483', 15.20);


SELECT * FROM ARTICULOS;

COMMIT;
