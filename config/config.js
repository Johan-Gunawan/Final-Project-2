module.exports = {
  development: {
    username: "postgres",
    password: "#postgre123",
    database: "final_project2",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    use_env_variable : process.env.DATABASE_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: true,
    },
  }
}
