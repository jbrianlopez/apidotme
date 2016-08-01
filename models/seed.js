//load in the environment vars
require('dotenv').config()

var seeder = require('mongoose-seed')

// Connect to MongoDB via mongoose
seeder.connect(process.env.MONGODB_URI, function () {
    // Load Mongoose models
    seeder.loadModels([
      'models/profile.js',
      'models/project.js',
      'models/education.js',
      'models/work.js'
    ])

    // Clear specified collections
    seeder.clearModels(['Profile', 'Project', 'Education', 'Work'], function () {
      // Callback to populate DB once collections have been cleared
      seeder.populateModels(data)
    })
})

// Data array containing seed data -documents organised by Model
var data = [
  {
    'model': 'Profile',
    'documents': [
      {
        'first_name': 'Brian',
        'last_name': 'Lopez',
        'email': 'jbrianlopez@gmail.com',
        'description': 'Full-stack Developer',
        'socials': [{name: 'https://github.com/jbrianlopez'},
                    {name: 'https://www.facebook.com/brianlopez'}],
        'picture': '../public/images/boo.png'
      }
    ]
  },
  {
    'model': 'Project',
    'documents': [
      {
        'title': 'The Simpsons Quiz',
        'description': 'A 2 player quiz based on the Simpsons',
        'link': 'http://jbrianlopez.github.io/quiz/',
        'skills': [{name: 'HTML'},
                    {name: 'JQuery'},
                    {name: 'CSS'}]
      },
      {
        'title': 'MicroBlog',
        'description': 'A MicroBlog with user authentication',
        'link': 'https://limitless-headland-46574.herokuapp.com/',
        'skills': [{name: 'HTML'},
                    {name: 'CSS'},
                    {name: 'Ruby'},
                    {name: 'Rails'},
                    {name: 'Bootstrap'}]
      }
    ]
  },
  {
    'model': 'Education',
    'documents': [
      {
        'school': 'Pepperdine University',
        'subjects': [{name: 'Bachelors in Business Administration'}]
      }
    ]
  },
  {
    'model': 'Work',
    'documents': [
      {
        'company': 'Vinotemp International',
        'role': 'Marketing Coordinator',
        'duty': 'Blah blah blah.'
      },
      {
        'company': 'Abandon Interactive Entertainment',
        'role': 'Marketing Manager',
        'duty': 'blah blah blah'
      }
    ]
  }
]
