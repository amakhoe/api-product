import mongo from 'mongoose';
import Producto from "../models/product.js";

//adicionar produto
export const createProduct = async (req, res) => {
    try {
    const product = await Producto.create(req.body);
    res.status(200).json(product);
    } catch (error) {
    res.status(500).json({message: error.message});
    }
};

//encontrar producto atraves de um id
export const getProuct =  async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Producto.find({id});
    res.status(200).json(product);
    } catch (error) {
    res.status(500).json({message: error.message});
    }
};
//encontrar productos atraves do id
export const getProuctAll = async (req, res) => {
    try {
    const product = await Producto.find({});
    res.status(200).json(product);
    } catch (error) {
    res.status(500).json({message: error.message});
    }
};

//update productos
export const updatedProduct = async (req, res) => {
    try {
    const {id} = req.params;

    const product = await Producto.findByIdAndUpdate(id, req.body);
    if  (!product) {
            res.status(404).json({message: "Producto nao encontrado"});
    }
    const updatedProduct = await Producto.findById(id);
    res.status(200).json(updatedProduct);
    } catch (error) {
    res.status(500).json({message: error.message});
    }
};
//eliminar productos
export const deleteProduct = async (req, res) => {
    try {
    const {id} = req.params;

    const product = await Producto.findByIdAndDelete(id, req.body);
    if  (!product) {
            res.status(404).json({message: "Producto nao encontrado"});
    }
    res.status(200).json({message: "Producto apagado com sucesso"});
    } catch (error) {
    res.status(500).json({message: error.message});
    }
};
