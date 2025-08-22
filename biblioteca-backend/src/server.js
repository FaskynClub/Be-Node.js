import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bookRoutes from "./routes/books.routes.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch((err) => console.error("❌ Error al conectar MongoDB:", err));

// Rutas
app.use("/api/books", bookRoutes);

// Puerto
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Servidor escuchando en puerto ${PORT}`));
