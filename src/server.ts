import "dotenv/config";
import app from "./app.js";//na compilação já aparece como json, por isso importado assim

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server rodaando na porta ${PORT}`)
});