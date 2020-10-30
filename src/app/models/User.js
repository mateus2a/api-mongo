const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
UserSchema.plugin(mongoosePaginate);
mongoose.model('User', UserSchema);
