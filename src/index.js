const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/billing", (req, res) => {
  res.json({
    service: "billing-api",
    amount: 700,
    currency: "USD"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Billing API running on port ${PORT}`);
});
