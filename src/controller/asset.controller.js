const service = require('../service/asset.service');

const getAll = async (req, res) => {
  const assets = await service.getAll();
  res.status(200).json(assets);
};

module.exports = {
  getAll,
};
