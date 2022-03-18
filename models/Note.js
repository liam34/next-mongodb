const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        maxlength: [250, 'Title cannot be more than 250 characters']
    },
    description: {
        type: String,
        required: true,
        maxlength: [1000, 'Description cannot be more than 1000 characters']
    }
})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);