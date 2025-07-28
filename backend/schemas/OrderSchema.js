import { Schema } from "mongoose";

export const OrderSchema = new Schema({
  name: String,
  qty: Number,
  price: String,
  mode: String,
});
