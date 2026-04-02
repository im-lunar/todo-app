const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);

const todosSchema = mongoose.Schema({
    title:String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
});

const todo = mongoose.model('todos', todosSchema);

module.exports = {
    todo
}