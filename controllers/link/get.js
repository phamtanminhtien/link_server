const Link = require("../../models/Link");

const get = async (req, res) => {
  const { linkId } = req.params;

  const findLink = await Link.findOne({ shortedLink: linkId });
  if (!findLink) return res.json({ success: false, message: "id is exist" });

  return res.json({ success: true, data: findLink });
};

module.exports = get;
