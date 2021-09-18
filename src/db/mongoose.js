const mongoose = require('mongoose')
MONGO_URI = "mongodb+srv://oneshot:oneshot@cluster0.ji2ni.mongodb.net/oneshot?retryWrites=true&w=majority"
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });