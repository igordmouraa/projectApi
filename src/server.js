require('dotenv').config();
const app = require('./index');
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor conectado e rodando na porta ${PORT} 💾`);
});
