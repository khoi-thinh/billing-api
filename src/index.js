const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/billing", (req, res) => {
  res.json({
    service: "billing-api",
    amount: 100,
    currency: "VND"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Billing API running on port ${PORT}`);
});
