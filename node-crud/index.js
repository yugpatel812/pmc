require("reflect-metadata");
const express = require("express");
const bodyParser = require("body-parser");
const { AppDataSource } = require("./data-source");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(bodyParser.json());

AppDataSource.initialize()
  .then(() => {
    console.log("PostgreSQL connected ✅");

    // Use routes
    app.use("/users", userRoutes);

    app.listen(3000, () =>
      console.log("Server running at http://localhost:3000")
    );
  })
  .catch((error) => console.error("Database connection error:", error));
