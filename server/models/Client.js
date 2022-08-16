const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: [true, "Email already exist"],
  },
  phone: {
    type: String,
    required: [true, "Please enter phone number"],
    unique: [true, "Phone number already exist"],
  },
});

module.exports = mongoose.model("Client", ClientSchema);
