var express = require('express');
var router = express.Router();

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		// req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

const bills_home = (req, res) => {
  console.log('Bills')
  res.render('bills')
}

router.get('/', ensureAuthenticated, bills_home)
// router.get('/new', bills_home)
// router.get('/new', bills_home)

module.exports = router
