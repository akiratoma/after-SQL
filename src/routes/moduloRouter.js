import { Router } from "express";
import ModuloModel from "../models/moduloModel.js";

const moduloRouter = new Router();
const moduloModel = new ModuloModel();

// [C]REATE
moduloRouter.post("/", async (req, res) => {
  try {
    const modulo = req.body;
    const ids = await moduloModel.createModulo(modulo);
    res.json(ids);
  } catch (err) {
    res.send(`Ocurrió un error en la db: ${err.message}`);
  }
});

// [R]EAD
moduloRouter.get("/", async (req, res) => {
  try {
    const modulos = await moduloModel.fetchAllModulos();
    res.json(modulos);
  } catch (err) {
    res.send(`Ocurrió un error en la db: ${err.message}`);
  }
});

moduloRouter.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const modulos = await moduloModel.fetchModulo(id);
    res.json(modulos);
  } catch (err) {
    res.send(`Ocurrió un error en la db: ${err.message}`);
  }
});

// [U]PDATE
moduloRouter.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const modulo = req.body;
    const dbId = await moduloModel.updateModulo(id, modulo);
    res.json(dbId);
  } catch (err) {
    res.send(`Ocurrió un error en la db: ${err.message}`);
  }
});

// [D]ELETE
moduloRouter.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await moduloModel.deleteModulo(id);
    res.send("Módulo eliminado correctamente");
  } catch (err) {
    res.send(`Ocurrió un error en la db: ${err.message}`);
  }
});

export default moduloRouter;
