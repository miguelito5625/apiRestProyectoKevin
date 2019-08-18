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

aeristasController.listFilter = (req, res) => {

    const data = req.body.filter;
    req.getConnection((err, conn) => {

        conn.query('SELECT * from vista_aerista_nc WHERE nombre_aerista LIKE "%'+ data + '%"', (err, Aeristas) => {

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