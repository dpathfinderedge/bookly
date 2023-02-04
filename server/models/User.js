import mongoose from "mongoose";
// import validator from 'validator';
const { Schema } = mongoose;

const UserSchema = new Schema ({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
},{ timestamps: true }
)

export default mongoose.model("User", UserSchema);