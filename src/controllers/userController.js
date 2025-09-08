import User from '../models/User.js';
import crypto from 'node:crypto';

export const createUser = async (req, res) => {
    try {
        const userToCreate = {
            id: crypto.randomUUID(),
            ...req.body
        }
        const user = await User.create(userToCreate);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ mensage: 'Erro ao criar usuário', error: err });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users); 
    } catch (err) {
        res.status(500).json({ mensage: 'Erro ao retornar usuários', error: err });
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await User.findOne({ 
            where: { id: req.params.id } 
        });
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ mensage: 'Erro ao retornar usuários', error: err });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id, ...dadosAtualizados } = req.body;
        const [updated] = await User.update(dadosAtualizados, {
            where: { id }
        });
        if (updated) {
            const userAtualizado = await User.findOne({ where: { id } });
            return res.status(200).json(userAtualizado);
        }
        res.status(404).json({ message: 'Usuário não encontrado' });
    } catch (err) {
        res.status(500).json({ mensage: 'Erro ao atualizar usuário', error: err });    
    }
};

export const deleteUser = async (req, res) => {
    try {
        const deleted = await User.destroy({ 
            where: { id: req.params.id } 
        });
        if (deleted) {
            return res.status(200).json({ message: 'Usuário deletado com sucesso' });
        }
        res.status(404).json({ message: 'Usuário não encontrado' });
    } catch (err) {
        res.status(500).json({ mensage: 'Erro ao deletar usuário', error: err });        
    }
};