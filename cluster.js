import cluster from "node:cluster";
import os from "node:os";
import express from "express";

const app = express();
const port = 3000;
const totalCpu = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`primary process ${process.pid} is runing`);
  cluster.fork();
  cluster.fork();
} else {
  app.get("/user-getdeatils", (req, res) => {
    console.log(`Request handled by worker ${process.pid}`);
    res.json({ message: "fast node js server request", pid: process.pid });
  });

  app.get("/user", (req, res) => {
    for (let i = 0; i < 10000; i++) {}
    res.json({ message: "heavy server request", pid: process.pid });
  });

  app.listen(port, () => {
    console.log(`Server on port ${port}, PID ${process.pid}`);
  });
}
