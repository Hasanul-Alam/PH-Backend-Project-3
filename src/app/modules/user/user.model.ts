import { model, Schema } from "mongoose";
import type { TUser } from "./user.interface.js";

const userSchema = new Schema<TUser>({
  id: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  needsPasswordChange: { type: Boolean, default: true },
  role: { type: String, enum: ["admin", "student", "faculty"], required: true },
  isDeleted: { type: Boolean, default: false },
  status: {
    type: String,
    enum: ["in-progress", "blocked"],
    default: "in-progress",
  },
});

export const User = model<TUser>("User", userSchema);
