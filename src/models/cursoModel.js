import knexClient from "../clients/knexClient.js";

class CursoModel {
  // [C]REATE
  async createCurso(curso) {
    const ids = await knexClient("curso").insert(curso);
    return ids;
  }

  // [R]EAD
  fetchAllCursos() {
    return knexClient("curso")
      .select("*", "curso.nombre as curso_nombre")
      .leftJoin("modulo", "curso.id", "=", "modulo.curso_id");
  }

  fetchCurso(id) {
    return knexClient("curso")
      .where("curso.id", id)
      .select("*", "curso.nombre as curso_nombre")
      .join("modulo", "curso.id", "=", "modulo.curso_id");
  }

  // [U]PDATE
  async updateCurso(id, curso) {
    const dbId = await knexClient("curso").where("id", id).update(curso);
    return dbId;
  }

  // [D]ELETE
  deleteCurso(id) {
    return knexClient("curso").where("id", id).del();
  }
}

export default CursoModel;
