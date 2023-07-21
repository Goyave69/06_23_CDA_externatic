const { update } = require("../../models/userManager");

async function updateFileController(req, res) {
  const { status, message } = await update(req.file.filename);

  return res.status(status).json(message);
}

module.exports = updateFileController;

// Si problèmes avec le put, copier const models = require("../../models"); models.user.update (pareil que dans create)
