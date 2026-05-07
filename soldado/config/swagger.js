import swaggerJSDoc from "swagger-jsdoc";   

const options = {
    definition: {
        openapi: "3.0.0",
        info:{
            title: "API de CRUD",
            //version: "1.0.0",
            description: "Documentação da API de CRUD NODE.JS",
        },
        severs: [
            {
                url: "http://localhost:3000",
            },
        ],

    },
    apis:["./routes/*.js"]
}