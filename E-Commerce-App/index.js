const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");
const adminProducstRouter = require("./routes/admin/products");
const productsRouter = require("./routes/products");
const cartsRouter = require("./routes/carts");


const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
  keys: ["kjfgäsajäsäösgj"]
}))

app.use(authRouter);
app.use(productsRouter);
app.use(adminProducstRouter);
app.use(cartsRouter);

app.listen(3000, () => {
 console.log("Listening !")
})


