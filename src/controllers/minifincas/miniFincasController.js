const miniFincasController = {};

miniFincasController.list = (req, res) => {

    req.getConnection((err, conn) => {

        conn.query('SELECT * from mini_finca', (err, miniFincas) =>{
            if(err){
                res.json(err);
            }else{
                const data = {miniFincas};
                res.json(data);
            }

        })


    });

};

module.exports = miniFincasController;