var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET users listing. */
router.get('/get_meta_data/:module_name/:screen_name', function (req, res, next) {
  const { module_name, screen_name } = req.params
  if (module_name === 'tradelicense' && screen_name === 'apply') {
    let rawdata = fs.readFileSync('./data/apply.json');
    let data = JSON.parse(rawdata);
    res.send(data)
  }
  else if (module_name === 'finance' && screen_name === 'collect') {
    let rawdata = fs.readFileSync('./data/collect.json');
    let data = JSON.parse(rawdata);
    res.send(data)
  }
});

module.exports = router;
