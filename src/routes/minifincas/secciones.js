const seccionesMFRouter = require('express').Router();
const seccionesMFController = require('../../controllers/minifincas/secciones');

seccionesMFRouter.post('/seccionesmf/listfilter', seccionesMFController.listFilter);




module.exports = seccionesMFRouter;