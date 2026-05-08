import {Sequelize} from 'sequelize';
import {connectDB} from "../config/databaseSol.js";

export const Produto = sequelize.define('produto',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    descricao:{
        type:Sequelize.STRING,
    },
    preco:{
        type:Sequelize.FLOAT,
        
    },

})