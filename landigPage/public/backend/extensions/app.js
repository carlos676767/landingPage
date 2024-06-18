

const btnBaixar = document.querySelector("button")

const baixarPlanilha = async () => {
  try {
    const data = await fetch("http://localhost:8080/planilha")
    const dados = await data.json()
    console.log(dados);
  } catch (error) {
    console.error(error)
  }
};


btnBaixar.addEventListener("click", () => {
    baixarPlanilha()
})