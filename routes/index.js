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
router.get('/', function (req, res) {
  Profile.findOne({}, (err, profile) => {
    if(err) return res.status(404).json({message: 'Profile not found'})
    res.json(profile)
  })
})

/* GET projects page. */
router.get('/projects', projectsController.index)

/* GET projects/:id page. */
router.get('/projects/:id', projectsController.show)

/* GET education page. */
router.get('/education', educationsController.index)

/* GET education/:id page. */
router.get('/education/:id', educationsController.show)

/* GET work page. */
router.get('/work', worksController.index)

module.exports = router
