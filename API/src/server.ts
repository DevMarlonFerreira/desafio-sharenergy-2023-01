import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import * as database from "./database";
import { Jobs } from "./jobs/index";

const debug = require("debug")("src.server.ts"); debug.enabled = true;

import { UserRouter } from "./routes/user";
import { RandomUserRouter } from "./routes/randomuser";
import { HttpCatRouter } from "./routes/httpcat";
import { RandomDogRouter } from "./routes/randomdog";
import { ClientRouter } from "./routes/client";
import { OthersRouter } from "./routes/others";

export class SetupServer {
  private app: Application;
  private jobs: Jobs;

  constructor(private port = 3945) {
    this.app = express();
    this.jobs = new Jobs();
  }

  public async init() {
    this.setupExpress();
    this.setupControllers();
  }

  private async databaseSetup(): Promise<void> {
    await database.connect();
  }

  private setupExpress(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(
      cors({
        origin: "*",
      })
    );
    this.app.use(helmet());
    this.app.use(compression());
  }

  private setupControllers(): void {
    this.routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }

  public async start(): Promise<void> {
    this.app.listen(this.port, () => {
      debug('Server rodando na porta: ' + this.port);
    });

    await this.databaseSetup();
    await this.jobs.createFirstUser();
  }

  public async close(): Promise<void> {
    await database.close();
  }

  private routes = [
    new UserRouter(),
    new RandomUserRouter(),
    new HttpCatRouter(),
    new RandomDogRouter(),
    new ClientRouter(),
    new OthersRouter()
  ];

  public getApp(): Application {
    return this.app;
  }
}
