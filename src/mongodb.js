import mongoose from "mongoose";

try {
  await mongoose.connect("mongodb://mymongo/faztdb");
} catch (error) {
  console.error(error);
}
