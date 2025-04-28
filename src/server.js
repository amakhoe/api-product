import express from 'express';
import mongo from 'mongoose';
import router from "../rotas/rotas.js";

const app = express();
app.use(express.json());
const PORTA = 5000;


app.listen(3000, () => {
        console.log(`servidor a correr na porta ${PORTA}`);
});

app.get('/', (req, res) => {
        res.send("hello you");
});
app.use("/api/produto", router);

mongo.connect("")
.then(() => {
        console.log("its working");
})
.catch(()=> {
        console.log("not working");
})
