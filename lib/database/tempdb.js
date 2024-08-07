  
  const mongoose = require('mongoose');  
  const TempDb = new mongoose.Schema({
    id: { type: String,  unique: true ,required: true, default:"Mesh-Tech"},
    creator: { type: String, default: "Mesh KE" },
    data: { type: Object, default: {} },
    sdb: { type: Object, default: {} }
  });  
  const dbtemp = mongoose.model("dbtemp", TempDb)
  module.exports = { dbtemp }
  
