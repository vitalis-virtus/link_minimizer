const { Schema, Types } = require("mongoose");

const linkSchema = Schema(
  {
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
      unique: true,
    },
    code: {
        type: String,
        required: true,
        unique: true,
    },
    clicks:{
        type: Number,
        default: 0
    },
    owner:{
        type:Types.ObjectId,
        ref: "User"
    }
  },
  { versionKey: false, timestamps: true }
);

module.exports = linkSchema;
