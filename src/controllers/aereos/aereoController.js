const aereoController = {};

aereoController.guardarAereo = (req, res) => {

    const data = req.body;
    console.log(data);

    req.getConnection((err, connection) => {
      
        const query = connection.query('INSERT INTO prueba_viaje set ?', data, (err, aereo) => {

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

module.exports = aereoController;