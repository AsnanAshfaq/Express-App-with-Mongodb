import mongoose from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema({
  first_name: String,
  last_name: String,
  date_of_birth: String,
  experience: String,
  salary: String
});
export default mongoose.model("User", userSchema);
