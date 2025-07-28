import { model } from "mongoose";
import HoldingSchema from "../schemas/HoldingsSchema.js";

// Model name should be singular + capitalized by convention
const HoldingsModel = model("holding", HoldingSchema);

// Export the model and/or schema as needed
export  default HoldingsModel;
