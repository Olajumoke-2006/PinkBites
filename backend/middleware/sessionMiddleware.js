const Session = require("../models/Session");

const sessionMiddleware = async (req, res, next) => {
  try {
    const deviceId = req.session.deviceId;

    let session = await Session.findOne({ deviceId });

    if (!session) {
      session = await Session.create({
        deviceId,
      });
    }

    req.deviceSession = session;

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = sessionMiddleware;