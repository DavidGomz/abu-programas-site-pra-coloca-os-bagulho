const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    
    response.send("Essa é a rota raiz");
});

app.listen(port, () => `Server listening on port: ${port}`);