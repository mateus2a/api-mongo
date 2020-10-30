import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/api-mongo', {
  useMongoClient: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

export default mongoose;
