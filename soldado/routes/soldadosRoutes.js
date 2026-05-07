import { Router } from "express";

import{
    createSoldado,
    getSoldados,
    getSoldado,
    updateSoldado,
    deleteSoldado,
}from "../controllers/controllerSoldado.js";

const router = Router();

/**
 * @swagger
 * /api/soldados:
 *   post:
 *     summary: Cria um usuário
 *     tags:
 *       - Soldados
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               nomedeguerra:
 *                 type: string
 *               temposervico:
 *                 type: integer
 *               patente:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado
 */

router.post("/soldados", createSoldado);

/**
 * @swagger
 * /api/soldados:
 *   get:
 *     summary: Lista todos os soldados
 *     tags:
 *       - Soldados
 *     responses:
 *       200:
 *         description: Lista de soldados
 *       500:
 *         description: Erro ao listar soldados
 */
router.get("/soldados", getSoldados);

/**
 * @swagger
 * /api/soldados/{id}:
 *   get:
 *     summary: Busca um soldado por ID
 *     tags:
 *       - Soldados
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Soldado encontrado
 *       404:
 *         description: Soldado não encontrado
 */
router.get("/soldados/:id", getSoldado);

/**
 * @swagger
 * /api/soldados/{id}:
 *   put:
 *     summary: Atualiza um soldado
 *     tags:
 *       - Soldados
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               nomedeguerra:
 *                 type: string
 *               temposervico:
 *                 type: integer
 *               patente:
 *                 type: string
 *     responses:
 *       200:
 *         description: Soldado atualizado
 *       404:
 *         description: Soldado não encontrado
 */
router.put("/soldados/:id", updateSoldado);

/**
 * @swagger
 * /api/soldados/{id}:
 *   delete:
 *     summary: Remove um soldado
 *     tags:
 *       - Soldados
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Soldado removido
 *       404:
 *         description: Soldado não encontrado
 */
router.delete("/soldados/:id", deleteSoldado);  

export default router;