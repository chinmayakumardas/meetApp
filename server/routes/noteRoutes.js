const express = require('express');
const router = express.Router();
const { getNotes, createNote, updateNote, deleteNote } = require('../controllers/noteController');
const authMiddleware = require('../middlewares/authMiddleware'); // Protecting routes

// GET all notes
router.get('/', authMiddleware, getNotes);

// POST a new note
router.post('/', authMiddleware, createNote);

// PUT update a note by ID
router.put('/:id', authMiddleware, updateNote);

// DELETE a note by ID
router.delete('/:id', authMiddleware, deleteNote);

module.exports = router;
