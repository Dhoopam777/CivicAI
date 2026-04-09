import express from "express";
import multer from "multer";

import {
  addComment,
  createComplaint,
  getAllComplaints,
  getMyComplaints,
  updateComplaintStatus,
  upvoteComplaint
} from "../controllers/complaintController.js";

import { protectRoute } from "../middleware/auth.js";

const router = express.Router();

/* -------- MULTER CONFIG -------- */

const upload = multer({
  dest: "uploads/"
});

/* -------- ROUTES -------- */

router.post(
  "/",
  protectRoute,
  upload.single("image"),
  createComplaint
);

router.get(
  "/",
  getAllComplaints
);

router.get(
  "/my",
  protectRoute,
  getMyComplaints
);

router.put(
  "/:id",
  updateComplaintStatus
);

router.put(
  "/:id/upvote",
  upvoteComplaint
);

router.post(
  "/:id/comment",
  addComment
);

export default router;