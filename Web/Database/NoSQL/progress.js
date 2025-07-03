const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  topic: String,
  status: {
    type: String,
    enum: ['pending', 'ongoing', 'completed'],
    default: 'pending'
  },
  category: {
    type: String,
    enum: ['DSA', 'Web']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Progress', progressSchema);
