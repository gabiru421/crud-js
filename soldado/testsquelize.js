(async()=>{
    const databaseSol = require("./config/databaseSol.js")
    const produto = require ("./models/produto.js")

    await databaseSol.sync();
    
    const novoProduto = await produto.create({
        nome: "macbook",
        preco: 10999.99,
        descricao: "nottebok top"

    })

    console.log(novoProduto)


})();