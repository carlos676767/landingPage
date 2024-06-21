const btnBaixar = document.querySelector("button")

const baixarPlanilha = async () => {
    try {
        const data = await fetch("http://localhost:9090/planilha")
        const res = await data.json()
        const { dados } = res
        const a = document.createElement('a')
        a.download = `${dados}.csv`
        a.href = dados
        a.click()
        alert(dados)
    } catch (error) {
        console.error(error)
    }
};

btnBaixar.addEventListener("click", () => {
    baixarPlanilha()
})