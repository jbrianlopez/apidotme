const mongoose = require('mongoose')

// const SocialSchema = mongoose.Schema({
//   name: { type: String }
// })

const ProfileSchema = mongoose.Schema({
  first_name: { type: String, required: true, minlength: 5},
  last_name: { type: String, required: true, minlength: 5},
  email: { type: String, required: true},
  description: { type: String, required: true},
  github: { type: String }
})

ProfileSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    return{
      _id: ret._id,
      name: `${ret.first_name} ${ret.last_name}`,
      description: ret.description,
      github: ret.github
    }
  }
})

module.exports =  mongoose.model('Profile', ProfileSchema)
