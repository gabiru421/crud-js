import {Soldado} from '../models/Soldado.js';

export const createSoldado = async (req, res) => {
    try {
        const soldado = await Soldado.create(req.body);
        res.status(201).json(soldado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao criar soldado' });
    }
};

export const getSoldados = async (req, res) =>{
    try{
        const soldados =await Soldado.findAll();
        return res.status(200).json(soldados);
    }catch(error){
        return res.status(500).json({message:error.message});


    }
}

export const getSoldado = async (req, res) => {
    try{
        const soldado = await Soldado.findByPk(req.params.id);

        if(!soldado){
            return res.status(404).json({message:'Soldado not Found'});
        }

        return res.status(200).json(soldado);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const updateSoldado = async (req, res) => {
    try{
        const soldado =await Soldado.findByPk(req.params.id);
        if(!soldado){
            return res.status(404).json({message:'Soldado not Found'});
        }

        await soldado.update(req.body);
        return res.status(200).json(soldado);

        }catch(error){
       return res.status(500).json ({message:error.message});
    }
}

export const deleteSoldado = async(req, res) =>{
    try{
        const soldado =await Soldado.findByPk(req.params.id);
        if(!soldado){
            return res.status(404).json({message:'Soldado not Found'});
        }
        await soldado.destroy();
        return res.status(200).json({message:'Soldado deleted'})
        }catch(error){
            return res.status(500).json ({message:error.message});
        }
}