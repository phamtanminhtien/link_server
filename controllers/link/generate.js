const Link = require("../../models/Link");
const generateId = require("../../utils/generateId");

const generate = async (req, res) => {
  const { link } = req.body;
  if (!link) return res.json({ success: false, message: "Link is required" });
  const id = generateId(15);

  const findLink = await Link.findOne({ sourceLink: link });

  if (findLink)
    return res.json({
      success: true,
      data: findLink,
    });

  const linkInstant = new Link({
    sourceLink: link,
    shortedLink: id,
  });

  const linkSaved = await linkInstant.save();
  return res.json({
    success: true,
    data: linkSaved,
  });
};

module.exports = generate;
