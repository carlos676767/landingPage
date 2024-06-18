const express = require("express");
const api = express();
const bodyParser = require("body-parser");
require('dotenv').config()
const nano = require('nano')(`http://${process.env.NAME}:${process.env.NAME}@localhost:5984`)
api.use(bodyParser.json())


api.get("/planilha", (res, data) => {
  try {
    data.send({ status: 200, msg: "resent data" }).status(200);
  } catch (error) {
    data.send({ status: 404, msg: "Erro 404 Not Found" }).status(404);
  }
});

api.post("/postDados", async(res, data) => {
  try {
    data.send({ status: 200, msg: "resent data" }).status(200);
    const {nome, email} = res.body
    await databaseConnect(nome,email)
  } catch (error) {
    data.send({ status: 404, msg: "Erro 404 Not Found" }).status(404);
  }
});


const databaseConnect = async(name, email) => {
  try {
    const connect = await nano.db.use("planilha")
    const add = await connect.insert({nome: name, email: email})
    console.log('dados sucess');
  } catch (error) {
    console.log(error);
  }
}

const port = 8080;
api.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});
