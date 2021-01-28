const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const blogController = require("../controllers/blog");

router.post(
  "/post",
  [
    body("title")
      .isLength({ min: 5 })
      .withMessage("input title must be 5 characters"),
    body("body")
      .isLength({ min: 5 })
      .withMessage("input body must be 5 characters"),
  ],
  blogController.createBlogPost
);

router.get("/posts", blogController.getAllBlogPost);
router.get("/post/:postId", blogController.getBlogPostById);

router.put(
  "/post/:postId",
  [
    body("title")
      .isLength({ min: 5 })
      .withMessage("input title must be 5 characters"),
    body("body")
      .isLength({ min: 5 })
      .withMessage("input body must be 5 characters"),
  ],
  blogController.UpdateBlogPost
);

router.delete("/post/:postId", blogController.deleteBlogPost);

module.exports = router;
