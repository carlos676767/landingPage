const { faker } = require('@faker-js/faker');



async function request() {
    const randomName = faker.person.firstName()
    const randomEmail = faker.internet.email()
    try {
        const httpRequest = await fetch("http://localhost:9090/postDados", {
            method: "POST",
            headers: {
                 "Content-Type": "application/json" 
            },
            body: JSON.stringify({nome: randomName, email: randomEmail  })
        })
        const data = await httpRequest.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

setInterval(() => {
    request()
}, 5000)