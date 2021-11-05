const router = require("express").Router();

router.get("/clients", (req, res) => {
  res.send({
    testing: "ok",
  });
});

module.exports = router;
