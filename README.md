# Proyecto Ventas

Proyecto sobre las ventas de una empresa de material de oficina (muebles, ordenadores, periféricos,...) a distintos clientes.


### Archivos

En la carpeta de *[source](https://github.com/SanchezGarciaEmilio/2020-12-21_ventas/tree/main/src)* incluimos los datos, concretamente en la carpeta *[data](https://github.com/SanchezGarciaEmilio/2020-12-21_ventas/tree/main/src/data)*. En data tenemos los datos de las *[ventas](https://github.com/SanchezGarciaEmilio/2020-12-21_ventas/blob/main/src/data/data.js)* en un solo fichero.
En él hemos incluido distintos campos; `_id` para identificar cada venta, `client_name` para identificar cada cliente, `purchase_date` donde incluimos la fecha en la que se realizó la compra, `product_name` donde inlcuimos el nombre del producto que se vende (pudiendo repetirse), `category` donde añadimos una categoria a cada producto, `unitary_prize` con el precio de cada producto individualmente, `stock` con el número de ventas a ese cliente y `warehouse` donde vienen el almacén o almacenes donde se encuentran los productos.

En la carpeta de *[documentation](https://github.com/SanchezGarciaEmilio/2020-11-23_proyecto/tree/main/doc)* encontramos las nociones teóricas necesarias para realizar este proyecto, en el archivo de *[Teoria](https://github.com/SanchezGarciaEmilio/2020-11-23_proyecto/blob/main/doc/TeoriaProyecto.pdf)*.


### Búsquedas

En la misma carpeta de *source* tenemos las búsquedas hechas en el archivo de *[query](https://github.com/SanchezGarciaEmilio/2020-11-23_proyecto/tree/main/src/query)*. Dentro tendremos tres archivos, uno por cada colección. Tenemos el de *[Empleados](https://github.com/SanchezGarciaEmilio/2020-11-23_proyecto/blob/main/src/query/query-Empleados.js)*, el de *[Clientes](https://github.com/SanchezGarciaEmilio/2020-11-23_proyecto/blob/main/src/query/query-Clientes.js)* y el de *[Productos](https://github.com/SanchezGarciaEmilio/2020-11-23_proyecto/blob/main/src/query/query-Productos.js)*.
En el *query* haremos las búsquedas en la base de datos con el `find()`. Usaremos distintas cláusulas como `$and`, `$gt`, `$nin` o `$regex` entre otros.


> Emilio Sánchez García