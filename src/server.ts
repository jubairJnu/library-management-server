import app from "./app";
import config from "./app/config";
// import app from "./app.js"

const port = config.port

//! routes
//! middleware

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
