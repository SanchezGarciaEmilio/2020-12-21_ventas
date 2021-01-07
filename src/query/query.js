//Busca todas las sillas vendidas y las ordenamos por el modelo, luego calculamos cuanto hemos ganado en total con cada modelo.

db.sales.aggregate([
    {$match: {category: "chairs"}},
    {$group: 
        {_id: "$product_name",
        total: {$sum: {$multiply: ["$unitary_prize","$stock"]}}}}
])


//Busca las ventas cuyo precio unitario haya sido superior o igual a 40 o que sean de la categoria silla, y solo nos muestra el cliente
//y los almacenes que tiene asignados.

db.sales.aggregate([
    {$match: {$or:
        [
            {unitary_prize: {$gte: 40}},
            {category: {$eq: "chairs"}}
        ]}},
    {$project: {
          _id: 0,
          client_name: 1,
          warehouse: 1,
        }}
])


//Cuenta el numero de clientes cuyo gasto ha sido superior a 2000 y los califica como clientes VIP.

db.sales.aggregate([
    {$group:
        {_id: "$client_name",
        total: {$sum: {$multiply: ["$unitary_prize","$stock"]}}}},
    {$match: {total: {$gte: 2000}}},
    {$count: "num_vip_client"}
])


//Busca todos los clientes  que han comprado ordenadores mostrando su nombre, producto, el primer almacén que tienen asignado y mostrando solo los VIP.

db.sales.aggregate([
    {$match: {category: "computer"}},
    {$project: {
        _id:0,
        client_name:1,
        product_name:1,
        first_wh: {$first:"$warehouse"},
        vip: {$gte: [{$sum: {$multiply: ["$unitary_prize","$stock"]}},2000]}
    }}
])


//

db.sales.aggregate([
    
])