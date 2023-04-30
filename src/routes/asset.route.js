const { Router } = require('express');
const controller = require('../controller/asset.controller');

const router = Router();

router.get('/', controller.getAll);

module.exports = router;
