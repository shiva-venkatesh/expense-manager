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

const groups_home = (req, res) => {
  console.log('Groups')
  res.render('groups')
}

const create_group = (req, res) => {

}

const update_group = (req, res) => {

}

router.get('/', ensureAuthenticated, groups_home)
// router.get('/new', groups_home)
// router.get('/new', groups_home)

module.exports = router
