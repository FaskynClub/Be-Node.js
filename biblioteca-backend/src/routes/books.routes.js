import express from "express";
import Book from "../models/Book.model.js";

const router = express.Router();

/* ========================
   1. CREAR LIBRO
======================== */
router.post("/", async (req, res) => {
  try {
    const { title, author, year, genre } = req.body;

    if (!title || !author || !year || !genre) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const newBook = new Book({ title, author, year, genre });
    await newBook.save();

    res.status(201).json(newBook);
  } catch (error) {
    console.error("❌ Error al crear libro:", error);
    res.status(500).json({ message: "Error al crear libro", error });
  }
});

/* ========================
   2. LISTAR TODOS LOS LIBROS
======================== */
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error("❌ Error al listar libros:", error);
    res.status(500).json({ message: "Error al listar libros", error });
  }
});

/* ========================
   3. OBTENER LIBRO POR ID
======================== */
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Libro no encontrado" });
    res.status(200).json(book);
  } catch (error) {
    console.error("❌ Error al obtener libro:", error);
    res.status(500).json({ message: "Error al obtener libro", error });
  }
});

/* ========================
   4. EDITAR LIBRO
======================== */
router.put("/:id", async (req, res) => {
  try {
    const { title, author, year, genre } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, year, genre },
      { new: true, runValidators: true }
    );

    if (!updatedBook) return res.status(404).json({ message: "Libro no encontrado" });
    res.status(200).json(updatedBook);
  } catch (error) {
    console.error("❌ Error al editar libro:", error);
    res.status(500).json({ message: "Error al editar libro", error });
  }
});

/* ========================
   5. CAMBIAR DISPONIBILIDAD AUTOMÁTICAMENTE (TOGGLE)
======================== */
router.patch("/:id/availability", async (req, res) => {
  try {
    // 1. Buscar libro por ID
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Libro no encontrado" });

    // 2. Alternar disponibilidad automáticamente
    book.available = !book.available;

    // 3. Guardar cambios
    const updatedBook = await book.save();

    res.status(200).json({
      message: `Libro ${updatedBook.available ? "reactivado" : "desactivado"} correctamente`,
      book: updatedBook,
    });
  } catch (error) {
    console.error("❌ Error al actualizar disponibilidad:", error);
    res.status(500).json({ message: "Error al actualizar disponibilidad", error });
  }
});

/* ========================
   6. ELIMINAR LIBRO (LÓGICO)
======================== */
router.delete("/:id", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { available: false },
      { new: true }
    );

    if (!updatedBook) return res.status(404).json({ message: "Libro no encontrado" });
    res.status(200).json({ message: "Libro desactivado correctamente", book: updatedBook });
  } catch (error) {
    console.error("❌ Error al eliminar libro:", error);
    res.status(500).json({ message: "Error al eliminar libro", error });
  }
});

export default router;
