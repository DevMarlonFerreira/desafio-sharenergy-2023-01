const debug = require("debug")("src.index.ts"); debug.enabled = true;
import { SetupServer } from "./server";

enum ExitStatus {
  Failure = 1,
  Success = 0,
}

process.on("unhandledRejection", (reason, promise) => {
  debug(
    `App encerrado com unhandled promise: ${promise} and reason: ${reason}`
  );
  throw reason;
});

process.on("uncaughtException", (error) => {
  debug(`App encerrado com uncaught exception: ${error}`);
  process.exit(ExitStatus.Failure);
});

process.on('SIGTERM', (error) => {
  debug(`App encerrado com SIGTERM: ${error}`)
  process.exit(ExitStatus.Failure);
});

(async (): Promise<void> => {
  try {
    const server = new SetupServer(3000);
    await server.init();
    await server.start();
  } catch (error) {
    debug(`App encerrado com erro: ${error}`);
    process.exit(ExitStatus.Failure);
  }
})();
