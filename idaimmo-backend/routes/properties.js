const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/propertiesController');
const { requireAdmin } = require('../middleware/auth'); // Middleware admin

// Routes publiques
router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getOne);

// Routes protégées (admin uniquement)
router.post('/', requireAdmin, ctrl.create);
router.put('/:id', requireAdmin, ctrl.update);
router.delete('/:id', requireAdmin, ctrl.delete);

module.exports = router;