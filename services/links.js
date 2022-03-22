const { Link } = require("../models");

const getLink = (ownerId) => {
  return Link.find({ owner: ownerId });
};

const getLinkById = (id) => {
  return Link.findById(id);
};

const getOneLinkByQuery = (query) => {
  return Link.findOne(query);
};

const addLink = ({ code, to, from, owner }) => {
  const newLink = new Link({ code, to, from, owner });
  return newLink.save();
};

module.exports = {
  getLink,
  getLinkById,
  getOneLinkByQuery,
  addLink,
};
