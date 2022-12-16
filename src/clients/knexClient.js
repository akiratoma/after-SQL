import knex from "knex";

const knexClient = knex({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    port: 3306,
    database: "sys",
  },
});

export default knexClient;
