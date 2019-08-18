const seccionesMFConstroller = {};

seccionesMFConstroller.listFilter = (req, res) => {
    const filter = req.body.filter;
    console.log(filter);
    req.getConnection((err, conn) =>{
        conn.query('SELECT id, nombre_seccion_mini_finca FROM seccion_mini_finca WHERE id_mini_finca = ?', filter, (err, secciones) =>{
            if (err) {
                res.json(err);
            }else{
                res.json({secciones});
            }
        });
    });
}

module.exports = seccionesMFConstroller;
