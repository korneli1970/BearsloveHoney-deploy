import express from "express";
const router = express.Router();
import { orderCreate } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

// router.route("/").post(protect, orderCreate);
router.post("/", protect, orderCreate);

export default router;
