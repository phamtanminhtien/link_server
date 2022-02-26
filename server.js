const express = require("express");
const res = require("express/lib/response");
require("dotenv").config();
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const Link = require("./models/Link");
const link = require("./routes/link");
const path = require("path");

mongoose
  .connect(process.env.STRING_CONNECT_DB, {})
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.error(err));

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("", express.static(path.join(__dirname, "client")));

app.use("/api/link", link);
app.get("/:id", async (req, res) => {
  const { id } = req.params;

  const findLink = await Link.findOne({ shortedLink: id });

  if (!findLink) return res.json({ success: false, message: "id is exist" });

  return res.redirect(findLink.sourceLink);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
