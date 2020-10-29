const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        title: { type: String, required: true },
        url: { type: String, required: true },
        date: { type: Date, required: true },
        keywords: { type: [String], required: true },
        content: { type: String, required: true },
        sources: [String],
        author: { type: String, required: true }
    },
    { collection: 'Contents' }
);

const model = mongoose.model('content', schema);
module.exports = model;