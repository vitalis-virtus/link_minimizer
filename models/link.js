const {linkSchema } = require('./schemas');
const {model} = require('mongoose');

const Link = model("link", linkSchema)

module.exports = Link