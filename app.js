const express = require('express')
const app = express()
const port = 3100;


require("./middlewares/view.mdw")(app);
require("./middlewares/routes.mdw")(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})