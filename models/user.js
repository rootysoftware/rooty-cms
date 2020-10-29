const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        name: { type: String, required: true },
        username: { type: String, required: true },
        password: { type: String, required: true },
        contents: { type: [String], required: true, default: [] },
        isAdmin: { type: Boolean, required: true, default: false }
    },
    { collection: 'Users' }
);

const model = mongoose.model('user', schema);
module.exports = model;