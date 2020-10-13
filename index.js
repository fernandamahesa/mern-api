const express = require("express");

const app = express();

app.use(() => {
  console.log("hello server");
  console.log("holla meeen!");
});

app.listen(4000);
