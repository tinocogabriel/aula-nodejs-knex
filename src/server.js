const express = require("express");
const app = express();

const routes = require("./routes");

app.use(express.json());
app.use(routes);

//Not Found
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404; 
  next(error);
});

//catch all
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: error.message,
  });
});

app.listen(3333, () => {
  console.log("server is running");
});
