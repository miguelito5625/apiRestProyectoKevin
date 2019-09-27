const aereoController = {};

aereoController.guardarAereo = (req, res) => {

    const data = req.body;
    // console.log(data);
    // res.send('ok');

    req.getConnection((err, conn) => {

        const query = conn.query('INSERT INTO viaje set ?', data, (err, aereo) => {

            if (err) {
                console.log('error en la insercion del viaje');
                res.send('error');
            } else {
                console.log('Insercion correcta del viaje aereo');
                res.send('ok');
            }

        });
    });

};

aereoController.todosLosViajes = (req, res) => {

    var tamanioBody = Object.keys(req.body).length;
    const fechas = req.body;
    // console.log(fechas);

    // console.log(tamanioBody);

    req.getConnection((err, conn) => {

        if (tamanioBody == 0) {

            conn.query('SELECT * FROM vista_todos_los_viajes', (err, viajes) => {
                if (err) {
                    console.log('error al obtener viajes');
                    res.send('error');
                } else {
                    console.log('todos los viajes enviados');
                    const data = { viajes };
                    res.send(data);
                }
            });

        } else {
            conn.query('SELECT * FROM vista_todos_los_viajes WHERE DATE(created_at) BETWEEN ? AND ?', [fechas.fecha1, fechas.fecha2], (err, viajes) => {
                if (err) {
                    console.log('error al obtener viajes');
                    console.log(err);
                    res.send('error');
                } else {
                    console.log('todos los viajes enviados');
                    const data = { viajes };
                    res.send(data);
                }
            });
        }


    })

}


aereoController.editarAereo = (req, res) => {

    const data = req.body;
    const viaje = {
        'numero_viaje': data.numero_viaje,
        'id_aerista': data.id_aerista,
        'created_at': data.created_at,
        'id_mini_finca': data.id_mini_finca,
        'id_seccion_mini_finca': data.id_seccion_mini_finca,
        'amarillo': data.amarillo,
        'negro': data.negro,
        'rojo': data.rojo,
        'verde': data.verde,
        'morado': data.morado,
        'cafe': data.cafe,
        'naranja': data.naranja,
        'azul': data.azul,
    }
    const id = data.id;
    // console.log(viaje);
    // res.send('ok');

    req.getConnection((err, conn) => {

        const query = conn.query('UPDATE viaje set ? WHERE id = ?', [viaje, id], (err, aereo) => {

            if (err) {
                console.log('error en la insercion del viaje');
                console.log(err);
              
              res.send('error');
            } else {
              console.log('Insercion correcta del viaje aereo');
              res.send('ok');
            }

        });
    });

};

aereoController.sumaCintaColoresUnaFecha = (req, res) => {

    // var tamanioBody = Object.keys(req.body).length;
    const fechas = req.body;
    console.log(fechas);

    // console.log(tamanioBody);

    req.getConnection((err, conn) => {

            conn.query('SELECT * FROM vista_suma_colores_cintas WHERE DATE(fecha) = ?', fechas.fecha1, (err, suma_cintas) => {
                if (err) {
                    console.log('error al obtener viajes');
                    // console.log(err);
                    res.send('error');
                } else {
                    console.log('sumas de cintas enviadas');
                    const data = { suma_cintas };
                    // console.log(data);
                    res.send(data);
                }
            });

    })

}



aereoController.sumaCintaColoresDosFechas = (req, res) => {

    // var tamanioBody = Object.keys(req.body).length;
    const fechas = req.body;
    console.log(fechas);

    // console.log(tamanioBody);

    req.getConnection((err, conn) => {

            conn.query('SELECT SUM(amarillo) AS amarillo, SUM(negro) AS negro, SUM(rojo) AS rojo, SUM(verde) AS verde, SUM(morado) AS morado, SUM(cafe) AS cafe, SUM(naranja) AS naranja, SUM(azul) AS azul FROM vista_suma_colores_cintas WHERE DATE(fecha) BETWEEN ? AND ?', [fechas.fecha1, fechas.fecha2], (err, suma_cintas) => {
                if (err) {
                    console.log('error al obtener viajes');
                    // console.log(err);
                    res.send('error');
                } else {
                    console.log('sumas de cintas por fecha enviadas');
                    const data = { suma_cintas };
                    console.log(data);
                    res.send(data);
                }
            });

    })

}

module.exports = aereoController;