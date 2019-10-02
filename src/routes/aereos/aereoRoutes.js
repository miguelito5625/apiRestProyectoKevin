const aereoRouter = require('express').Router();

const aereoController = require('../../controllers/aereos/aereoController.js');

aereoRouter.post('/aereos/add', aereoController.guardarAereo);
aereoRouter.post('/aereos/mostrartodos', aereoController.todosLosViajes);
aereoRouter.post('/aereos/editaraereo', aereoController.editarAereo);
aereoRouter.post('/aereos/sumacintasunafecha', aereoController.sumaCintaColoresUnaFecha);
aereoRouter.post('/aereos/sumacintasdosfechas', aereoController.sumaCintaColoresDosFechas);


module.exports = aereoRouter;
