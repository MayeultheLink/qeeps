const { getCandidates } = require('../services/candidatesService');

const getCandidatesController = async (req, res) => {
  try {
    const result = await getCandidates();
    res.send({ result });
  } catch (error) {
    console.error("Error in candidates controller:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getCandidatesController
};
