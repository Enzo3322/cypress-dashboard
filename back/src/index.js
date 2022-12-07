const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());

app.use(express.json());

function logRequests(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.time(logLabel);

  next(); // Próximo middleware

  console.timeEnd(logLabel);
}

app.use(logRequests);

app.get("/logs", async (request, response) => {
  const res = await axios.get(
    "http://20.10.18.52/cypress-logs/full_report.json"
  );

  return response.json(res.data);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Back-end started! http://localhost:${port}`);
});
