import { model, Model } from "mongoose";
import { OrderSchema } from "../schemas/OrderSchema.js";

const OrderModel = model("order", OrderSchema);
export { OrderModel };
