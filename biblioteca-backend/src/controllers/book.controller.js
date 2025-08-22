import { Book } from "../models/Book.model.js";

// Obtener todos los libros
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un libro por ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Libro no encontrado" });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo libro
export const createBook = async (req, res) => {
  try {
    const { title, author, year, genre } = req.body;
    const newBook = new Book({ title, author, year, genre });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un libro
export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!updatedBook)
      return res.status(404).json({ message: "Libro no encontrado" });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un libro
export const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook)
      return res.status(404).json({ message: "Libro no encontrado" });
    res.status(200).json({ message: "Libro eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
