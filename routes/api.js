/**
 * Created by Edmundo on 4/8/2016
 */

var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser').urlencoded({ extended: false });

router.route('/data')
  .get(function(req, res) {
    "use strict";

    // Check if not accepts application/json MIME.
    if ( ! req.accepts('application/json')) {
      res.status(406).send('Not Acceptable. You should accept application/json.');
    }

    res.sendFile(req.app.get('projectRootPath') + '/data/data.json');
  });

module.exports = router;
