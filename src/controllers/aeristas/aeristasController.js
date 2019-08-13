const aeristasController = {};

aeristasController.list = (req, res) => {

    req.getConnection((err, conn) => {

        conn.query('SELECT * from vista_aerista_nc', (err, Aeristas) => {

            if(err){
                res.json(err);
            }else{
                const data = {Aeristas};
                res.json(data);
            }


        })

    })

};


module.exports = aeristasController;