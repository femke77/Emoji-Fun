const path = require('path');
const express = require('express');
const app = express();

const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")

const PORT = process.env.PORT || 3002;

const sequelize = require("./config/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}` ));
});