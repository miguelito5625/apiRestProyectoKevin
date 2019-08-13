const aeristaRouter = require('express').Router();

const aeristaController = require('../../controllers/aeristas/aeristasController');

aeristaRouter.get('/aerista/list', aeristaController.list);




module.exports = aeristaRouter;
