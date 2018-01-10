var express = require('express');
var router = express.Router();

var Users = require('../models/user')
// var groups = require('../models/group')

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		res.redirect('/users/login');
	}
}

const groups_home = (req, res) => {
  // console.log('Groups')
  res.render('groups')
}

const create_group = (req, res) => {
	console.log(req.body.name)
	console.log(req.body.friends)
}

const update_group = (req, res) => {

}

const get_all_friends = (req, res) => {
  Users.find({}, function(err, users) {
    res.json(users)
  })
}

router.get('/', ensureAuthenticated, groups_home)
router.post('/new', create_group)
router.get('/friends', get_all_friends)

module.exports = router
