import config from "configs/env.config";
import app from "./app";

const port = config.PORT || 4500;

app.listen(port, () => {
  console.log(`** SERVER STARTED : localhost:${port} **`);
});
