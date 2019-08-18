const miniFincasRouter = require('express').Router();
const miniFincasController = require('../../controllers/minifincas/miniFincasController');

miniFincasRouter.get('/minifincas/list', miniFincasController.list);




module.exports = miniFincasRouter;