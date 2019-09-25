const aereoRouter = require('express').Router();

const aereoController = require('../../controllers/aereos/aereoController.js');

aereoRouter.post('/aereos/add', aereoController.guardarAereo);
aereoRouter.post('/aereos/mostrartodos', aereoController.todosLosViajes);
aereoRouter.post('/aereos/editaraereo', aereoController.editarAereo);


module.exports = aereoRouter;
