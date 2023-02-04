import mongoose from "mongoose";
// import validator from 'validator';
const { Schema } = mongoose;

const RoomSchema = new Schema ({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  maxPeople: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }]
},{ timestamps: true })

export default mongoose.model("Room", RoomSchema);