const Record = require('../models/Record');

exports.totalIncome = async (req, res) => {
  const data = await Record.aggregate([
    { $match: { type: 'INCOME' } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);
  res.json(data);
};

exports.totalExpense = async (req, res) => {
  const data = await Record.aggregate([
    { $match: { type: 'EXPENSE' } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);
  res.json(data);
};

exports.netBalance = async (req, res) => {
  const income = await Record.aggregate([
    { $match: { type: 'INCOME' } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  const expense = await Record.aggregate([
    { $match: { type: 'EXPENSE' } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  const net =
    (income[0]?.total || 0) - (expense[0]?.total || 0);

  res.json({ net });
};