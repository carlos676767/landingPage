
const btnBaixar = document.querySelector("button")

const baixarPlanilha =  async() => {
  try {
    const data = await fetch("http://localhost:8080/planilha")
    const res = await data.json()
    const {dados} = res
    const a = document.createElement('a')
    a.download = dados
    a.href = dados
    a.click()
    console.log(dados);
  } catch (error) {
    console.error(error)
  }
};


btnBaixar.addEventListener("click", () => {
    baixarPlanilha()
})