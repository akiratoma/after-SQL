import knexClient from "../clients/knexClient.js";

class ModuloModel {
  // [C]REATE
  async createModulo(modulo) {
    const ids = await knexClient("modulo").insert(modulo);
    return ids;
  }

  // [R]EAD
  fetchAllModulos() {
    return knexClient("modulo").select("*").limit(100);
  }

  fetchModulo(id) {
    return knexClient("modulo").where("id", id).select("*");
  }

  // [U]PDATE
  async updateModulo(id, modulo) {
    const dbId = await knexClient("modulo").where("id", id).update(modulo);
    return dbId;
  }

  // [D]ELETE
  deleteModulo(id) {
    return knexClient("modulo").where("id", id).del();
  }
}

export default ModuloModel;
