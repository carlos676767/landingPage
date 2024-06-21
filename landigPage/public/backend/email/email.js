const nodemailer = require("nodemailer");
const email = require(".");


require("dotenv").config({ path: "../app.env" });
const enviarEmail = async (emaill) => {
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
      html: email,
    });
    console.log(dados);
  }

  await sendEmail();
  return emaill;
};

module.exports = enviarEmail;
