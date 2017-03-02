var express = require('express');
var router = express.Router();

/* GET users listing. */
//로그인 선택 화면 
router.get('/login', function(req, res, next) {
  res.render('login');
});
//NEST 회원 로그인
router.get('/login/nest_login', function(req, res, next) {
  res.render('nest_login');
});
module.exports = router;
