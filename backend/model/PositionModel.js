import { model } from "mongoose";
import { PositionSchema } from "../schemas/PositionSchema.js";

const PositionModel = model("position", PositionSchema);
export default PositionModel;
