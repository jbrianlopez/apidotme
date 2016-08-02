var express = require('express')
var router = express.Router()

const Profile = require('../models/profile')
const projectsController = require('../controllers/projects_controller')
const educationsController = require('../controllers/educations_controller')
const worksController = require('../controllers/works_controller')

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
/* GET home page. */
router.get('/profiles', function (req, res) {
  Profile.find({}, (err, profile) => {
    if(err) return res.status(404).json({message: 'Profile not found'})
    res.json({profile: profile})
  })
})

/* GET projects page. */
router.get('/projects', projectsController.index)

/* GET projects/:id page. */
router.get('/projects/:id', projectsController.show)

/* GET education page. */
router.get('/educations', educationsController.index)

/* GET education/:id page. */
router.get('/educations/:id', educationsController.show)

/* GET work page. */
router.get('/works', worksController.index)

module.exports = router
