const express = require("express");
const api = express();
const bodyParser = require("body-parser");
const renderCsv = require("./csv");
const path = require("path")
require('dotenv').config({path: "../backend/app.env"})
const nano = require('nano')(`http://${process.env.NAME}:${process.env.NAME}@localhost:5984`)
api.use(bodyParser.json())
const cors = require("cors");
const enviarEmail = require("./email/email");
api.use(cors())


api.get("/planilha", async(res, data) => {
  try {
    const diretorio = path.join(__dirname, 'planilha.csv')
    data.download(diretorio)
  } catch (error) {
    data.send({ status: 404, msg: "Erro 404 Not Found" }).status(404);
  }
});


api.post("/postDados", async(res, data) => {
  try {
    data.send({ status: 200, msg: "resent data" }).status(200);
    const {nome, email} = res.body
    await newDadosDataBase(nome,email);
  } catch (error) {
    data.send({ status: 404, msg: "Erro 404 Not Found" }).status(404);
  }
});

const databaseConnect = async() => {
  const connect = await nano.db.use("planilha")
  return connect
}

async function newDadosDataBase(name, email, callback) {
  try {
    const database = await databaseConnect()
    const dadosDatabase = await database.insert({nome: name, email: email})
    enviarEmail(email)
    searchDados()
  } catch (error) {
    console.log(error);
  }
}

async function searchDados() {
  try {
    const database =await databaseConnect()
    const list = (await (await database).list()).rows
    list.map(async(data) => {
      const {id} = data
      const idFromData = await (await database).get(id)
      const {nome, email} = idFromData
      await renderCsv(nome,email)

    })
  } catch (error) {
    console.log(error);
  }
}



const port = 9090;
api.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});