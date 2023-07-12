import { Schema, model } from "mongoose";

const characterSchema = new Schema({
  name: {
    type: String,
    minLength: 1,
    maxLength: 100,
    unique: true,
    required: true,
  },
  race: {
    type: String,
    minLength: 2,
    maxLength: 100,
    unique: false,
    required: true,
  },
  gender: {
    type: String,
    minLength: 2,
    maxLength: 100,
    unique: false,
    required: true,
  },
  bio: {
    type: String,
    minLength: 5,
    unique: false,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Character = model("character", characterSchema);

export default Character;
