const aereoRouter = require('express').Router();

const aereoController = require('../../controllers/aereos/aereoController.js');

aereoRouter.post('/aereos/add', aereoController.guardarAereo);


module.exports = aereoRouter;
