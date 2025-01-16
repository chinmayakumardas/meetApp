const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
  person: {
    type: String,
    required: [true, 'Person is required'],
  },
});

module.exports = mongoose.model('Note', noteSchema);
