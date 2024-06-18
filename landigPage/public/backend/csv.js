const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'file.csv',
  header: [
    {id: 'name', title: 'NOME'},
    {id: 'email', title: "EMAIL"}
  ]
});

const records = [
  {name: 'Bob', email: 'll@gmail.com'},
  {name: 'Bob', email: 'll@gmail.com'},
  {name: 'Bob', email: 'll@gmail.com'},
];



csvWriter.writeRecords(records).then(() => {
  console.log("...Done");
});
