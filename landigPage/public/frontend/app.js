const buttom = document.querySelector("button");
const inputs = document.querySelectorAll("input");
const pegarDadosInputs = () => {
  const nome = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  return { nome, email};
};

const validarDados = (dados) => {
  return dados.email == "" && dados.nome == "";
};

const mudarBordaInput = () => {
  const msg = document.querySelector(".msg")
  inputs[1].classList.add("classRed");
  inputs[0].classList.add("classRed");
  msg.innerHTML = 'Preencha os inputs  com os  valores para participar <br> do nosso mega evento.'
  setTimeout(() => {
    inputs[0].classList.remove("classRed");
    inputs[1].classList.remove("classRed");
    msg.innerHTML = ""
  }, 3000);
};


const enviarDados = async () => {
  const dados = pegarDadosInputs();
  if (validarDados(dados)) {
  mudarBordaInput()
  } else {
    try {
      const httpRequest = await fetch("http://localhost:9090/postDados", {
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
