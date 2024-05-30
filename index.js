const express = require("express");
const i18n4e = require("i18n4e");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");
//i18n4e.default.init(app, {
//  serverSideTranslation: true,
//});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/docs", (req, res) => {
  res.render("docs/docs");
});


app.listen(PORT, () => {
  console.log(`Started on http://localhost:${PORT}`);
});
