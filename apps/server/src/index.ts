import cors from "cors";
import express from "express";

import { corsConfig } from "./config/config.js";
import { featureRouter } from "./modules/featureName/name.route.js";

export const app = express();

app.use(express.json());
app.use(cors(corsConfig));
app.use("/api/v1", featureRouter);

app.listen(8001, () => {
  console.log("Server started successfully.");
});
