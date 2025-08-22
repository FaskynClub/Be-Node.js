import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://faskynclub:JE8gPdnivZ08Wc5R@faskynclub.fyka37q.mongodb.net/biblioteca?retryWrites=true&w=majority"
    );
    console.log("✅ Conectado a la base de datos MongoDB");
  } catch (error) {
    console.error("❌ Error al conectar con MongoDB:", error.message);
    process.exit(1);
  }
};
