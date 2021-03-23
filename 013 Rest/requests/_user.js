const { check, validationResult } = require("express-validator");

exports._user = [
  check("name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("User name cannot be empty!")
    .isLength({ min: 3 })
    .withMessage("Minimum 3 characters required!"),
  check("email")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Email cannot be empty!")
    .isEmail()
    .withMessage("Invalid email address!"),
  check("active")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Active cannot be empty!")
    .isBoolean()
    .withMessage("Active must be 1 or 0"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];
