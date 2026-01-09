const { exec } = require("node:child_process");

// Check infra/compose.yaml for name
const CONTAINER_NAME = "postgres-dev";

function checkPostgres() {
  exec(
    `docker exec ${CONTAINER_NAME} pg_isready --host localhost`,
    handleReturn,
  );

  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      checkPostgres();
      return;
    }

    console.log("\n🟢 Postgres está pronto e aceitando conexões!!\n");
  }
}

process.stdout.write("\n\n🔴 Aguardando Postgres aceitar conexões...");

checkPostgres();
