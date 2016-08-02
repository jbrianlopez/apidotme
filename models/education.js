const mongoose = require('mongoose')
// 
// const SubjectSchema = mongoose.Schema({
//   name: { type: String }
// })

const EducationSchema = mongoose.Schema({
  school: { type: String, required: true, minlength: 5 },
  subjects: { type: String, required: true, minlength: 5 }
})

module.exports = mongoose.model('Education', EducationSchema)
