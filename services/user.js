const {User} = require("../models");

const getOne = (filter) => {
  return User.findOne(filter);
};

const add = ({ email, password }) => {
  const newUser = new User({ email });
  newUser.setPassword(password);
  return newUser.save();
};

const updateById = (id, updateInfo) =>{
    return User.findByIdAndUpdate(id, updateInfo, {new: true})
}



module.exports = {
  getOne,
  add,
  updateById
};
