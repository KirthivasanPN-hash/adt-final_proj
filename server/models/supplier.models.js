const mongoose = require("mongoose");
const supplierSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Contact_Person: {
      type: String,
      required: false,
    },
    Email: {
      type: String,
      required: true,
    },
    // profilePicture: {
    //   type: String,
    //   default:
    //     'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg',
    // },
  },
  { timestamps: true }
);

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;
