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
    await newDadosDataBase(nome,email)
  } catch (error) {
    data.send({ status: 404, msg: "Erro 404 Not Found" }).status(404);
  }
});

const databaseConnect = async(name, email) => {
  const connect = await nano.db.use("planilha")
  return connect
}


async function newDadosDataBase(name, email) {
  try {
    const database = await databaseConnect()
    const dadosDatabase = await database.insert({nome: name, email: email})
    console.log('DATABASE FROM CSDEV NEW DADOS'); 
  } catch (error) {
    console.log(error);
  }
}

async function searchDados() {
  try {
    const database = databaseConnect()
    const list = (await (await database).list()).rows
    list.map(async(data) => {
      const {id} = data
      const idFromData = await (await database).get(id)
      const {nome, email} = idFromData
      console.log(nome);
    })
  } catch (error) {
    console.log(error);
  }
}

searchDados()

const port = 8080;
api.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});