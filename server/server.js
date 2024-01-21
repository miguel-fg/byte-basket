require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const productRoutes = require("./routes/products");
const userRoutes = require("./routes/user");

// express app
const app = express();
app.use(cors());

// listen for requests
const port = process.env.PORT;

// request log
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// access json data
app.use(express.json());

// routes
app.use("/api/products", productRoutes);
app.use("/api/user", userRoutes);

// connect to DB
mongoose.set("strictQuery", false);
const mongodb = process.env.MONGO_URI;

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongodb).then(() => {
        if (port) {
            app.listen(port, () => {
                console.log(`connected to DB & listening on port ${port}`);
            });
        }
    });
}
