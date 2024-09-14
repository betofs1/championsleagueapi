import express from "express";
import router from "./routes";
import cors from "cors";

function createApp() {
    const app = express();

    app.use(express.json());
    app.use("/api", router);

    const corsOption = {
        origin: "*",
    };

    app.use(cors(corsOption));

    return app;
}

export default createApp;
