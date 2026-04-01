const Record = require('../models/Record');

exports.createRecord = async (req, res) => {
  const record = await Record.create({
    ...req.body,
    user: req.user.id
  });
  res.json(record);
};

exports.getRecords = async (req, res) => {
  const { type, category, page = 1, limit = 5, startDate, endDate } = req.query;

  let filter = {};

  if (type) filter.type = type;
  if (category) filter.category = category;

  if (startDate && endDate) {
    filter.date = {
      $gte: new Date(startDate),
      $lte: new Date(endDate)
    };
  }

  const records = await Record.find(filter)
    .skip((page - 1) * limit)
    .limit(parseInt(limit));

  res.json(records);
};

exports.updateRecord = async (req, res) => {
  const record = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(record);
};

exports.deleteRecord = async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.json({ message: "Record deleted" });
};