const Link = require("../../models/Link");

const getAll = async (req, res) => {
  const allLink = await Link.find({}).limit(10).sort({ createdAt: -1 });
  res.json({ success: true, data: allLink });
};

module.exports = getAll;
