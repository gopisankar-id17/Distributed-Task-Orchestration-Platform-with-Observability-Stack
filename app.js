const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Vanakam da mapla from KEC");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
}); 