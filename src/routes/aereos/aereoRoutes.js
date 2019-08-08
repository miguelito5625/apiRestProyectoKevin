const aereoRouter = require('express').Router();

const aereoController = require('../../controllers/aereos/aereoController.js');

aereoRouter.post('/', aereoController.guardarAereo);




module.exports = aereoRouter;
