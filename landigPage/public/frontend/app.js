const buttom = document.querySelector("button");
const pegarDadosInputs = () => {
  const inputs = document.querySelectorAll("input");
  const nome = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  return { nome, email };
};

const validarDados = (dados) => {
  return dados.email == "" && dados.nome == "";
};

const validarEmail = (dados) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(dados.email)) {
    alert("digite um email valido");
  }
};

const mudarBordaInput = (dados) => {
  const msg = document.querySelector(".msg")
  dados.email.classlist.add("classRed");
  dados.nome.classlist.add("classRed");
  msg.innerHTML = 'Preencha os inputs com os valores para participar do nosso mega evento'
  setTimeout(() => {
    dados.email.classlist.remove("classRed");
    dados.nome.classlist.remove("classRed");
  }, 5000);
};

const enviarDados = async () => {
  const dados = pegarDadosInputs();
  if (validarDados(dados)) {
  mudarBordaInput(dados)
  } else {
    try {
      const httpRequest = await fetch("http://localhost:8080/postDados", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: dados.nome, email: dados.email }),
      });
      const data = await httpRequest.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
};

buttom.addEventListener("click", () => {
  enviarDados();
});
