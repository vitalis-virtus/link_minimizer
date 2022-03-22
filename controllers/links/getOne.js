const { redirect } = require("express/lib/response");
const { links: service } = require("../../services");

const getOne = async (req, res, next) => {
  try {
    const { code } = req.params;
    const link = await service.getOneLinkByQuery({ code });
    if (link) {
      link.clicks++;
      await link.save();
      return res.redirect(link.from);
    }
    return res.status(404).json({
      status: "error",
      code: 404,
      message: "Link not found",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getOne;
