import "dotenv/config.js";
import app from "./src/app.js";

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log("servidor escutando");
});