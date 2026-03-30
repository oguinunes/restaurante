import "dotenv/config";
import app from "./app.js";//na compilação já aparece como json, por isso importado assim
import database from "./config/database.js";

const PORT = process.env.PORT || 3000;

async function startServer():Promise<void>{
    await database.connect();
    app.listen(PORT, ()=>{
    console.log(`Server rodaando na porta ${PORT}`);
});
}

startServer();//inicializando a função

