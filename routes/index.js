var express = require('express');
var router = express.Router();
const Info = require('../models/Info')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res, next) => {

  Info.create({ ...req.body })
    .then((createdInfo) => {
      console.log("Created info ===>", createdInfo)
    })
    .catch((err) => {
      console.log(err)
      res.json(err)
      next(err)
    })
})

module.exports = router;
