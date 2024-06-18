const buttom = document.querySelector("button");
const pegarDadosInputs = () => {
  const inputs = document.querySelectorAll("input");
  const nome = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  return { nome, email };
};




const enviarDados = async () => {
  const dados = pegarDadosInputs();
  try {
    const httpRequest = await fetch('http://localhost:8080/postDados',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome: dados.nome, email: dados.email }),
    });
    const data = await httpRequest.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

buttom.addEventListener("click", () => {
  enviarDados();
});
