import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import "./src/database/dbConnection";
import charactersRoutes from "./src/routes/characters.routes";

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

app.use(cors());
app.use(express.json());

app.use("/apicharacters", charactersRoutes);
