const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /courses",
    name: "open CV",
    description: "description for the course",
    courseImg: "any url for course img",
  });
});

router.post("/", (req, res, next) => {
  const course = {
    name: req.body.name,
    description: req.body.description,
    courseImg: req.body.courseImg,
  };
  res.status(201).json({
    message: "Handling POST requests to /courses",
    createCourse: course,
  });
});

router.get("/:courseId", (req, res, next) => {
  const id = req.params.courseId;
  res.status(200).json({
    message: "You discovered the special ID",
    id: id,
    name: "open CV",
    description: "description for the course",
    courseImg: "any url for course img",
  });
});
router.delete("/:courseId", (req, res, next) => {
  res.status(200).json({
    message: "Deleted course!",
  });
});

module.exports = router;
