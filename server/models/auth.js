import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    profilePicture: {type: String, required: false},
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    about: {type: String },
    tags: {type: [String] },
    joinedOn: {type: Date, default: Date.now }
})

export default mongoose.model("User", userSchema)