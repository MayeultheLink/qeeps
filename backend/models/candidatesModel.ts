const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({
    _id: {type: String, required: true},
    type: { type: String, required: true },
    firstName: { type: Number, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    dateOfBirth: { type: Number, required: true },
    adress: { type: Number, required: true },
    monthlyRevenus: { type: Number, required: true },
    job: { type: Number, required: true },
    situation: { type: Number, required: true },
    guarantor_ids: { type: Number, required: true },
});

module.exports = mongoose.model('Scrobble', candidateSchema);