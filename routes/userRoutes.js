const express = require('express');
const router = express.Router();

const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

const {
  getUsers,
  updateUser,
  deleteUser
} = require('../controllers/userController');

router.get('/', auth, role('ADMIN'), getUsers);
router.put('/:id', auth, role('ADMIN'), updateUser);
router.delete('/:id', auth, role('ADMIN'), deleteUser);

module.exports = router;