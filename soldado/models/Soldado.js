import {DataTypes} from "sequelize";
import { sequelize } from "../config/databaseSol.js";

export const Soldado = sequelize.define("Soldado", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    nomedeguerra: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    temposervico: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    patente: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: "soldados",
    timestamps: true
});