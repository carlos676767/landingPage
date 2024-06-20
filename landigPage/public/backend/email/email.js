const nodemailer = require("nodemailer");
require("dotenv").config({ path: "../app.env" });
const enviarEmail = (emaill) => {
  const fs = require("fs");
  fs.readFile("./index.html", "utf8", async (erro, sucesso) => {
    if (erro) {
      return;
    }
    const data = sucesso;
    const configuracoes = nodemailer.createTransport({
      service: "yahoo",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.SENHAEMAIL,
      },
    });

    async function sendEmail() {
      const dados = await configuracoes.sendMail({
        from: process.env.EMAIL,
        subject: "Confirmação de Cadastro para Evento de Programação",
        to: emaill,
        html: data,
      });
      console.log(dados);
    }

    await sendEmail();
  });
};

module.exports = enviarEmail
