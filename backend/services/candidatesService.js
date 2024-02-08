const { getDatabase } = require('../database');

const getCandidates = async () => {
  const db = await getDatabase();

  const aggregation = [
    { $match: { type: "Candidate" } }
  ]

  const candidates = await db.collection('candidats').aggregate(aggregation).toArray();

  return candidates;
};

module.exports = {
  getCandidates
};