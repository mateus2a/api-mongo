const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const users = await User.paginate({}, { page, limit: 10 });

    return res.json(users);
  },

  async store(req, res) {
    const { name, email } = await User.create(req.body);

    return res.json({ name, email });
  },

  async update(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(user);
  },

  async destroy(req, res) {
    // eslint-disable-next-line no-unused-vars
    const user = await User.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
