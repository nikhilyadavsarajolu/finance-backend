const express = require('express');
const router = express.Router();

const auth = require('../middleware/authMiddleware');

const {
  totalIncome,
  totalExpense,
  netBalance
} = require('../controllers/dashboardController');

router.get('/income', auth, totalIncome);
router.get('/expense', auth, totalExpense);
router.get('/net', auth, netBalance);

module.exports = router;