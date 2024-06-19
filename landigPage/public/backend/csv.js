const createCsvWriter = require("csv-writer").createObjectCsvWriter;

async function renderCsv(nome, email) {
  const records = await [{ name: nome, email: email }];
  const csvWriter = await createCsvWriter({
    path: "planilha.csv",
    header: [
      { id: "name", title: "NOME" },
      { id: "email", title: "EMAIL" },
    ],
    append: true
  });
  await csvWriter.writeRecords(records);
}

module.exports = renderCsv;
