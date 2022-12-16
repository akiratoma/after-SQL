import knexClient from "../clients/knexClient.js";

// IIFE: Immediately Invoked Function Expression
(async () => {
  try {
    console.log("initializing migrate script...");
    await knexClient.schema.dropTableIfExists("modulo");
    await knexClient.schema.dropTableIfExists("curso");

    await knexClient.schema.createTable("curso", (table) => {
      table.increments("id").primary();
      table.string("nombre").notNullable();
      table.string("profesor").notNullable();
      table.integer("precio").notNullable();
      table.date("fecha_inicio").notNullable();
      table.date("fecha_termino").notNullable();
    });

    await knexClient.schema.createTable("modulo", (table) => {
      table.increments("id").primary();
      table.string("nombre").notNullable();
      table.string("link").notNullable();
      table.string("descripcion").notNullable();
      table.integer("curso_id").unsigned().notNullable();
      table.foreign("curso_id").references("curso.id").onDelete("CASCADE");
    });
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("finished migrate script");
    knexClient.destroy();
  }
})();
