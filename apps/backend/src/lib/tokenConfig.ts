import jwt from "jsonwebtoken";
import { config } from "../config/config";

export const createToken = (id: string) => {
  return jwt.sign({ _id: id }, config.JWT_SECRET, {
    expiresIn: "1h",
  });
};