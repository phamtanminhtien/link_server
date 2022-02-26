const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  sourceLink: {
    type: String,
    require: true,
  },
  shortedLink: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Link", linkSchema);
