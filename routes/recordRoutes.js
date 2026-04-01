const express = require('express');
const router = express.Router();

const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} = require('../controllers/recordController');

router.post('/', auth, role('ADMIN'), createRecord);
router.get('/', auth, getRecords);
router.put('/:id', auth, role('ADMIN'), updateRecord);
router.delete('/:id', auth, role('ADMIN'), deleteRecord);

module.exports = router;