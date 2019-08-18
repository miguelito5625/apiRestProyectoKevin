const aereoController = {};

aereoController.guardarAereo = (req, res) => {

    const data = req.body;
    console.log(data);

    // req.getConnection((err, conn) => {
      
    //     const query = conn.query('INSERT INTO viaje set ?', data, (err, aereo) => {

    //         if (err) {
    //           console.log('error en la insercion del viaje');
    //           res.send('error');
    //         } else {
    //           console.log('Insercion correcta del viaje aereo');
    //           res.send('ok');
    //         }
      
    //     });
    // });

};

module.exports = aereoController;