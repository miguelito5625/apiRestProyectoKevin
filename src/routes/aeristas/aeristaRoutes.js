const aeristaRouter = require('express').Router();

const aeristaController = require('../../controllers/aeristas/aeristasController');

aeristaRouter.get('/aerista/list', aeristaController.list);
aeristaRouter.post('/aerista/listfilter', aeristaController.listFilter);




module.exports = aeristaRouter;
