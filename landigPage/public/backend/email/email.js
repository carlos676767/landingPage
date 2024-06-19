const nodemailer = require("nodemailer");
require("dotenv").config({ path: "../app.env" });

const enviarEmail = (email) => {
  const fs = require("fs");
  fs.readFile("./index.html", "utf8", (erro, sucesso) => {
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
  });
};
