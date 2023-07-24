const models = require("../../models");

async function createFileController(req, res) {
  console.log(req.files);
  // const { status, message } = await insert(req.file.filename); // Single
  const { status, message } = await models.user.insert(req.files.filename); // Multiple
  return res.status(status).json(message);
}

module.exports = createFileController;
