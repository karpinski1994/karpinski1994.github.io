const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deckSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Deck', deckSchema);
