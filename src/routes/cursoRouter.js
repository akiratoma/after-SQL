import { Router } from "express";
import CursoModel from "../models/cursoModel.js";

const cursoRouter = new Router();
const cursoModel = new CursoModel();

// [C]REATE
cursoRouter.post("/", async (req, res) => {
  try {
    const curso = req.body;
    const ids = await cursoModel.createCurso(curso);
    res.json(ids);
  } catch (err) {
    res.send(`Ocurrió un error en la db: ${err.message}`);
  }
});

// [R]EAD
cursoRouter.get("/", async (req, res) => {
  try {
    const cursos = await cursoModel.fetchAllCursos();
    res.json(cursos);
  } catch (err) {
    res.send(`Ocurrió un error en la db: ${err.message}`);
  }
});

cursoRouter.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const cursos = await cursoModel.fetchCurso(id);
    res.json(cursos);
  } catch (err) {
    res.send(`Ocurrió un error en la db: ${err.message}`);
  }
});

// [U]PDATE
cursoRouter.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const curso = req.body;
    const dbId = await cursoModel.updateCurso(id, curso);
    res.json(dbId);
  } catch (err) {
    res.send(`Ocurrió un error en la db: ${err.message}`);
  }
});

// [D]ELETE
cursoRouter.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await cursoModel.deleteCurso(id);
    res.send("Curso eliminado correctamente");
  } catch (err) {
    res.send(`Ocurrió un error en la db: ${err.message}`);
  }
});

export default cursoRouter;
